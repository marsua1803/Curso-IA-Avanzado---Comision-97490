**Grupo DISAL · Planta Villa Mercedes**

# Manual de Procedimientos del Pañol de Repuestos

| Código | Revisión | Vigencia desde | Responsable del documento | Aprobó |
|---|---|---|---|---|
| MP-PAN-001 | 03 | 01/10/2026 | Responsable de Pañol | Jefe de Mantenimiento |

**Nota:** documento de ejemplo elaborado para el Curso IA Avanzada (n8n). Los valores, plazos y montos son de referencia y no reflejan datos reales de la empresa.

## 1. Objetivo y alcance

Este manual define cómo se solicitan, aprueban, entregan, devuelven y controlan los repuestos, herramientas y materiales de mantenimiento custodiados en el Pañol de Repuestos de la Planta Villa Mercedes.

Aplica a todo el personal propio de Mantenimiento, Producción y Servicios Generales, y a los contratistas que trabajen dentro de la planta. No aplica a materias primas, envases ni producto terminado, que se gestionan en el Almacén de Materiales.

## 2. Definiciones

| Término | Definición |
|---|---|
| Pañol | Depósito cerrado donde se guardan repuestos, herramientas y consumibles de mantenimiento, con acceso restringido al personal de pañol. |
| Vale de salida | Registro de la entrega de un material, con código SAP, cantidad, solicitante y orden de trabajo o centro de costo. |
| Orden de trabajo (OT) | Orden de mantenimiento generada en SAP PM que justifica el consumo de repuestos. |
| Reserva SAP | Bloqueo de stock a favor de una OT antes de que el material se retire físicamente. |
| Repuesto crítico | Repuesto cuya falta detiene una línea de producción o compromete la seguridad (ver sección 7). |
| Stock de seguridad | Cantidad mínima que debe permanecer siempre en pañol para cubrir fallas imprevistas. |
| Reparable | Componente que, al ser reemplazado, se envía a reparar en lugar de descartarse (bombas, motores, reductores). |
| Material inmovilizado | Material sin movimientos de salida durante 24 meses o más. |

## 3. Roles y responsabilidades

| Rol | Responsabilidades principales |
|---|---|
| Responsable de Pañol | Custodia física del stock, entrega y recepción de materiales, registro de vales en SAP, conteos cíclicos y actualización de este manual. |
| Auxiliar de Pañol | Atención en mostrador, preparación de pedidos, control de herramientas prestadas y orden del depósito. |
| Jefe de Mantenimiento | Aprueba retiros de alto valor y de repuestos críticos, define la criticidad de los repuestos y el stock de seguridad. |
| Supervisor de turno | Autoriza retiros fuera de horario y firma la llave de guardia. |
| Gerente de Planta | Aprueba retiros de muy alto valor y bajas de material obsoleto. |
| Jefe de Administración | Aprueba ajustes de inventario en SAP y preside el comité de material inmovilizado. |
| Solicitante | Pide el material con la información completa y firma el vale de salida. |

## 4. Horarios de atención y guardias

| Turno | Días | Horario | Quién atiende |
|---|---|---|---|
| Mañana | Lunes a viernes | 06:00 a 14:00 | Responsable de Pañol y Auxiliar |
| Tarde | Lunes a viernes | 14:00 a 22:00 | Auxiliar de Pañol |
| Sábados | Sábado | 06:00 a 13:00 | Auxiliar de Pañol |
| Fuera de horario | Noches, domingos y feriados | Sin atención en mostrador | Supervisor de turno con llave de guardia |

### 4.1 Retiros fuera de horario

Fuera del horario de atención, el pañol permanece cerrado. Ante una urgencia de producción, el Supervisor de turno puede abrir el pañol con la llave de guardia, entregar el material y dejar un vale provisorio firmado en la bandeja de guardia. El Responsable de Pañol regulariza el vale en SAP dentro de las 24 horas hábiles siguientes. Los repuestos críticos retirados fuera de horario requieren además un aviso al Jefe de Mantenimiento antes del inicio del turno siguiente.

## 5. Solicitud y retiro de repuestos

### 5.1 Canales de solicitud

- **Asistente de Pañol:** por Telegram o por correo a la casilla del pañol. El asistente informa stock y ubicación, y registra el pedido para su aprobación.
- **Mostrador:** en forma presencial, dentro del horario de atención.
- **Reserva en SAP:** para trabajos planificados, el planificador de mantenimiento reserva el material en la OT con al menos 48 horas de anticipación.

### 5.2 Datos obligatorios de la solicitud

Toda solicitud debe indicar: código SAP del material (o descripción y equipo si se desconoce el código), cantidad, número de OT o centro de costo, y nombre del solicitante. Sin OT ni centro de costo no se entrega material, salvo en retiros de urgencia fuera de horario (sección 4.1).

### 5.3 Niveles de aprobación

El nivel de aprobación depende del valor total del vale y de la criticidad del material:

| Valor del vale (ARS) | Material no crítico | Repuesto crítico |
|---|---|---|
| Hasta 500.000 | Responsable de Pañol | Jefe de Mantenimiento |
| Más de 500.000 y hasta 3.000.000 | Jefe de Mantenimiento | Jefe de Mantenimiento |
| Más de 3.000.000 | Gerente de Planta | Gerente de Planta |

**Excepción:** un repuesto crítico siempre requiere la aprobación del Jefe de Mantenimiento, aunque el valor del vale sea menor a 500.000 ARS.

### 5.4 Plazos de entrega

| Situación del material | Plazo de entrega |
|---|---|
| En stock, sin reserva | Inmediato en mostrador (hasta 30 minutos si requiere preparación) |
| Reservado en una OT | Preparado el día anterior a la fecha planificada del trabajo |
| Sin stock | Se genera una solicitud de pedido (SOLPED); el plazo depende del proveedor y se informa al solicitante |

### 5.5 Retiro por terceros y contratistas

Un contratista puede retirar materiales solo con autorización escrita del Supervisor de Mantenimiento que lo contrató, indicando la OT asociada. Los contratistas no pueden retirar repuestos críticos ni herramientas calibradas en ningún caso; esos materiales los retira personal propio y los entrega en el lugar de trabajo.

## 6. Devoluciones y reintegros

Se acepta la devolución de materiales sobrantes dentro de los 5 días hábiles posteriores al retiro, siempre que estén sin uso, completos y en su embalaje original, presentando el vale de salida. El reintegro se registra en SAP contra la misma OT. Los materiales cortados a medida (mangueras, correas, cables, caños) y los lubricantes o productos químicos con el envase abierto no tienen devolución.

Los materiales devueltos fuera de plazo o con uso se evalúan con el Jefe de Mantenimiento; si no pueden reingresar al stock se tratan como material para disposición final.

## 7. Repuestos críticos y stock de seguridad

### 7.1 Criterios de criticidad

Un repuesto se clasifica como crítico cuando cumple al menos una de estas condiciones: su falta detiene una línea de producción, tiene un plazo de reposición mayor a 30 días, tiene un único proveedor, o su falla compromete la seguridad de las personas o del ambiente.

| Clase | Criterio | Stock de seguridad | Revisión del parámetro |
|---|---|---|---|
| A · Crítico | Detiene línea o afecta la seguridad | Obligatorio, definido por el Jefe de Mantenimiento | Semestral |
| B · Importante | Afecta la capacidad, con alternativa temporal | Recomendado | Anual |
| C · General | Consumibles y repuestos de reposición inmediata | No requerido | Anual |

### 7.2 Reglas para repuestos críticos

- Cuando el stock de un repuesto crítico llega al stock de seguridad, el Responsable de Pañol genera la SOLPED de reposición en el mismo día.
- No se prestan repuestos críticos a otras plantas del grupo sin autorización escrita del Jefe de Mantenimiento.
- Todo retiro de un repuesto crítico se informa en el parte diario de mantenimiento.

## 8. Préstamo de herramientas

Las herramientas del pañol se prestan por turno y deben devolverse antes de que termine el turno en que se retiraron. Las herramientas calibradas (torquímetros, instrumentos de medición) se registran con su número de serie y fecha de vencimiento de calibración; no se entregan si la calibración está vencida.

La pérdida o rotura de una herramienta se informa al Responsable de Pañol el mismo día mediante un informe de novedad firmado por el Supervisor. Las herramientas con préstamos vencidos por más de 48 horas se informan al Jefe de Mantenimiento.

## 9. Reparables y repuestos usados

Los componentes reparables se entregan bajo la modalidad cambio por cambio: para retirar un reparable nuevo o reacondicionado, el solicitante debe devolver la pieza reemplazada dentro de las 48 horas. La pieza usada se identifica con tarjeta roja (a reparar) o tarjeta verde (reparada y disponible) y queda en el sector de reparables hasta su envío al taller externo.

## 10. Inventarios y ajustes

El pañol realiza conteos cíclicos según la clasificación ABC por valor de consumo anual:

| Clase ABC | Participación en el valor | Frecuencia de conteo | Tolerancia de diferencia |
|---|---|---|---|
| A | Aproximadamente 80 % del valor | Mensual | 0 % |
| B | Aproximadamente 15 % del valor | Trimestral | Hasta 2 % |
| C | Aproximadamente 5 % del valor | Semestral | Hasta 5 % |

Las diferencias que superan la tolerancia se recuentan dentro de las 48 horas. Todo ajuste de inventario en SAP requiere la aprobación del Jefe de Administración.

## 11. Material inmovilizado y obsoleto

Un material sin salidas durante 24 meses se considera inmovilizado. El Responsable de Pañol emite el listado trimestral y lo presenta al comité de material inmovilizado (Jefe de Administración, Jefe de Mantenimiento y Responsable de Pañol), que decide uno de estos destinos: conservar como repuesto de seguridad, transferir a otra planta del grupo, vender o dar de baja. La baja de material requiere la aprobación del Gerente de Planta.

## 12. Seguridad e higiene en el pañol

- El ingreso al depósito está restringido al personal de pañol; el resto del personal es atendido en el mostrador.
- Es obligatorio el uso de calzado de seguridad dentro del depósito.
- Las cargas de más de 25 kg se manipulan con ayuda mecánica (zorra o autoelevador) o entre dos personas.
- Los lubricantes y productos químicos se guardan en el sector ventilado con bandeja antiderrame, junto con su hoja de datos de seguridad.

## 13. Control de revisiones

| Revisión | Fecha | Descripción del cambio |
|---|---|---|
| 01 | 15/03/2025 | Emisión inicial del manual. |
| 02 | 01/02/2026 | Se agregan los niveles de aprobación por valor y el retiro por contratistas. |
| 03 | 01/10/2026 | Se incorpora el Asistente de Pañol como canal de solicitud y se actualizan los montos de aprobación. |
