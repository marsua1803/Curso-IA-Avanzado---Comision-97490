-- =====================================================================
-- Asistente de Pañol · Módulo 3 · Memoria de corto plazo (buffer)
-- Base: Neon Postgres · Ejecutar una sola vez en el SQL Editor de Neon
-- =====================================================================

-- 1. Tabla de turnos de conversación (buffer de corto plazo)
--    Guarda cada mensaje del usuario y cada respuesta del asistente.
--    NO es la memoria de largo plazo: esa vive en Airtable (Memoria_Panol)
--    como resumen estructurado. Este buffer existe para:
--      a) dar al Manager los últimos turnos de la sesión (referencias "ese", "el anterior"),
--      b) contar intercambios para disparar la summarization (> 5),
--      c) proveer la transcripción que el modelo mini consolida.
CREATE TABLE IF NOT EXISTS chat_turnos (
    id          BIGSERIAL    PRIMARY KEY,
    session_id  TEXT         NOT NULL,                 -- Telegram chat.id
    role        TEXT         NOT NULL CHECK (role IN ('user', 'assistant')),
    content     TEXT         NOT NULL,                 -- truncado a 1.500 caracteres desde n8n
    resumido    BOOLEAN      NOT NULL DEFAULT false,   -- true = ya consolidado en Airtable
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);

-- 2. Índices para las tres consultas del workflow
--    (todas filtran por session_id: aislamiento por usuario, evita amnesia cruzada)
CREATE INDEX IF NOT EXISTS idx_chat_turnos_session_id
    ON chat_turnos (session_id, id DESC);

CREATE INDEX IF NOT EXISTS idx_chat_turnos_pendientes
    ON chat_turnos (session_id)
    WHERE resumido = false;

-- 3. Verificación
SELECT 'chat_turnos creada' AS estado, COUNT(*) AS filas FROM chat_turnos;

-- ---------------------------------------------------------------------
-- 4. (Opcional) Política de retención: el buffer no es un archivo histórico.
--    Ejecutar periódicamente (o desde un workflow con Schedule Trigger)
--    para borrar turnos ya consolidados con más de 7 días.
-- DELETE FROM chat_turnos
-- WHERE resumido = true
--   AND created_at < now() - interval '7 days';

-- ---------------------------------------------------------------------
-- 5. Consultas útiles para las pruebas
-- Últimos turnos de un usuario:
-- SELECT id, role, left(content, 80) AS contenido, resumido, created_at
-- FROM chat_turnos WHERE session_id = 'TU_CHAT_ID' ORDER BY id DESC LIMIT 20;
--
-- Intercambios pendientes de resumir por usuario:
-- SELECT session_id, COUNT(*) FILTER (WHERE role = 'user') AS pendientes
-- FROM chat_turnos WHERE resumido = false GROUP BY session_id;
--
-- Reiniciar las pruebas de un usuario:
-- DELETE FROM chat_turnos WHERE session_id = 'TU_CHAT_ID';
