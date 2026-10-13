# Curso IA Avanzada (n8n) · Comisión 97490

Entregas del proyecto integrador **Asistente de Pañol**: un agente en n8n que evoluciona módulo a módulo.

| Módulo | Hito | Carpeta |
|---|---|---|
| M1 | Agente base: Tools Agent + System Prompt + Tool + Observabilidad | [M1](./M1) |
| M2 | Multi-agente Manager-Worker (orquestador + 2 sub-workflows + log de trazabilidad) | [M2](./M2) |
| M3 | Memoria híbrida por Session_ID (Airtable largo plazo + Neon corto plazo + summarization JSON) | [M3](./M3) |
| M4 | Integraciones avanzadas: canal Email con Gmail + HubSpot + Slack y guardrails (anti auto-reply, Look up anti-409, Create Draft HITL, validación anti-400) | [M4](./M4) |
| M5 | Cerebro documental (RAG): Manual de Procedimientos parseado con LlamaCloud, PGVector en Neon, Worker con Top-K + Minimum Score escalonado, cita determinista y regla "No sé" en 4 capas | [M5](./M5) |
| M6 | Voice AI: Canal Voz por Telegram (Whisper data·es → AI Agent RAG → ElevenLabs Multilingual v2), contención de 200 caracteres por prompt + código, rutas de contingencia y destrucción binaria verificada | [M6](./M6) |
| M7 | Arquitectura agéntica empresarial: diseño de una red de 4 agentes especializados para MRO (pañol), con scorecards de riesgo, semáforo HITL en Slack, mínimo privilegio y registro de decisiones inmutable | [M7](./M7) |
| M8 | AI-as-a-Judge: supervisor LLM con JSON Schema y Switch de 3 rutas (Aceptar · Corregir con máx. 2 reintentos · Escalar a Slack Aprobar/Editar), log de veredictos en Sheets y test A/B de 10 corridas con proyección de costos a 1.000 ejecuciones | [M8](./M8) |
| M9 | Gobernanza, costos y observabilidad: KPIs y ROI contra baseline manual, TCO con presupuesto de tokens y Prompt Caching, llaves DEV/PROD con tope, logs JSON relacionales con traceId propagado a sub-workflows, mapa de riesgos éticos y de seguridad, y privacidad por proveedor (ZDR) | [M9](./M9) |

Autor: Mario Suarez
