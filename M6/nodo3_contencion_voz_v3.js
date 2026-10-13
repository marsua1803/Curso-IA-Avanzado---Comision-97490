// ③ Contención financiera y de cumplimiento por CÓDIGO (no por prompt) · v3
// - Tope duro de 200 caracteres para lo que se sintetiza en ElevenLabs
// - Limpieza de elementos que el TTS leería mal (URLs, emojis, markdown, citas)
// - Normalización para la voz: abreviaturas, ubicaciones y códigos alfanuméricos
// - Validación de fuente_rag: solo se acepta una cita [Manual: …]
// - Listados: la voz resume y el detalle va por escrito (criterio UX: listas → texto)
// - "No sé" determinista (mismas 3 capas del M5)
const MAX = 200;
const NO_SE = 'No sé. Esa información no figura en el Manual del Pañol. Le paso tu consulta al Responsable.';
const o = $json.output || {};
const ctx = $('Unificar consulta (voz / texto)').item.json;

const limpiar = (s) => String(s || '')
  .replace(/\[Manual:[^\]]*\]/g, '')
  .replace(/https?:\/\/\S+?(?=[.,;:!?)]*(\s|$))/g, '')
  .replace(/\p{Extended_Pictographic}/gu, '')
  .replace(/[*_#`>•|]/g, '')
  .replace(/^\s*[-–]\s+/gm, '')
  .replace(/\s+/g, ' ')
  .replace(/\s+([.,;:!?])/g, '$1')
  .trim();

// Solo para el audio: que el TTS diga lo que un técnico entiende
const paraVoz = (s) => s
  .replace(/(^|:\s*|\.\s+)\d{1,2}\.\s+(?=\D)/g, '$1')        // quita enumeradores "1. 2. 3." (falsos fines de frase)
  .replace(/\bEst\.\s*/gi, 'estante ')
  .replace(/\bUbic\.\s*/gi, 'ubicación ')
  .replace(/\bN[°º]\s*/g, 'número ')
  .replace(/\bunid\.\s*/gi, 'unidades ')
  .replace(/\b([A-Z])-(\d{1,2})-(\d{1,2})\b/g, (m, a, b, c) => `${a}, ${Number(b)}, ${Number(c)}`)
  .replace(/\b(?=[A-Z0-9]*\d)(?=[A-Z0-9]*[A-Z])[A-Z0-9]{4,}\b/g,
           (m) => m.replace(/(\d+)/g, ' $1 ').replace(/([A-Z])/g, ' $1 ').replace(/\s+/g, ' ').trim())
  .replace(/\s+/g, ' ')
  .trim();

const recortar = (s) => {
  if (s.length <= MAX) return s;
  const c = s.slice(0, MAX);
  let p = -1;
  for (let i = c.length - 1; i >= 100; i--) {               // último punto real (no "3." ni decimales)
    if (c[i] === '.' && (i === c.length - 1 || c[i + 1] === ' ') && !/\d/.test(c[i - 1] || '')) { p = i; break; }
  }
  if (p >= 100) return c.slice(0, p + 1);
  const e = c.lastIndexOf(' ');
  return c.slice(0, e > 0 ? e : MAX - 1).replace(/[,;:]$/, '') + '.';
};

const original = limpiar(o.respuesta);
const fuenteRaw = String(o.fuente_rag || '').trim();
const citas = fuenteRaw.match(/\[Manual:[^\]]*\]/g) || [];
const fuente = citas.join(' ');                       // solo citas válidas del manual
const evidencia = String(o.evidencia || '').trim();
const admiteNoSaber = /(no (est[aá]|se encuentra|figura|aparece|consta)[^.]{0,40}(disponible|en el manual|en la documentaci[oó]n|registrad)|no (tengo|cuento con)[^.]{0,30}(acceso|informaci[oó]n|ese dato|datos))/i.test(original);
const noSe = o.sin_respuesta_en_manual === true || (fuente !== '' && evidencia === '') || admiteNoSaber;

const esListado = (o.intent === 'stock_listado_equipo') || ((original.match(/(^|:\s*|\.\s+)\d{1,2}\.\s+\D/g) || []).length >= 2);
const nItems = (original.match(/(^|:\s*|\.\s+)\d{1,2}\.\s+\D/g) || []).length;
const vozCompleta = paraVoz(original);
let formatoVoz = 'completa';
let voz;
if (noSe) { voz = NO_SE; formatoVoz = 'no_se'; }
else if (esListado && nItems >= 2) {
  voz = `Encontré ${nItems} repuestos. Te dejo el detalle por escrito, con stock y estante de cada uno.`;
  formatoVoz = 'resumen_listado';
} else {
  voz = recortar(vozCompleta);
  if (voz !== vozCompleta) formatoVoz = 'recortada';
}
let textoBase = noSe ? NO_SE : recortar(original);
const vacia = !original && !noSe;
if (vacia) { voz = textoBase = 'No pude armar la respuesta. Le paso tu consulta al Responsable del Pañol.'; }

// Código SAP y material: del campo correcto o rescatados si el modelo los puso en otro lado
const sap = (String(o.codigo_sap || '').match(/\d{6}/) || fuenteRaw.match(/\b\d{6}\b/) || [''])[0];
const material = String(o.material || (fuenteRaw.match(/Descripci[oó]n:\s*(.+)/i) || ['', ''])[1]).trim().slice(0, 120);

let texto = textoBase;
if (sap) texto += `\nCódigo SAP: ${sap}`;
if (material && !noSe) texto += `\nMaterial: ${material}`;
if (fuente && !noSe) texto += `\n${fuente}`;

return {
  json: {
    session_id: ctx.session_id,
    nombre: ctx.nombre,
    canal: ctx.canal,
    intent: o.intent || 'unsupported',
    codigo_sap: sap,
    material,
    requiere_revision: o.requiere_revision === true || noSe || vacia,
    sin_respuesta_en_manual: noSe,
    fuente_rag: noSe ? '' : fuente,
    respuesta_voz: voz,                       // → ElevenLabs (≤ 200 caracteres, normalizada para oído)
    respuesta_texto: texto.slice(0, 1000),    // → caption (texto exacto + SAP + material + cita)
    caracteres_modelo: original.length,       // KPI: cumplimiento del prompt
    caracteres_tts: voz.length,               // KPI: caracteres facturados
    formato_voz: formatoVoz,                  // completa | recortada | resumen_listado | no_se
    recorte_aplicado: formatoVoz === 'recortada'
  }
};
