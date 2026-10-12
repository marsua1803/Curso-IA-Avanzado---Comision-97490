-- Ejecutar una sola vez en el SQL Editor de Neon (misma base que usa n8n)
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS panol_kb (
  id        uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  text      text,
  metadata  jsonb,
  embedding vector
);

-- Verificación
SELECT extname, extversion FROM pg_extension WHERE extname = 'vector';
