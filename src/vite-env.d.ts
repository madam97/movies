/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOVIEDB_API_BASE_URL: string,
  readonly VITE_MOVIEDB_API_KEY: string,
  readonly VITE_MOVIEDB_IMG_BASE_PATH: string,

  readonly VITE_BREAKPOINT_TABLET: string,
  readonly VITE_BREAKPOINT_LAPTOP: string,
  readonly VITE_BREAKPOINT_DESKTOP: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}