/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  // Aggiungi altre variabili d'ambiente come necessario
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
