import TBreakpoints from './types/TBreakpoints'

export const defBreakpoints: Record<TBreakpoints, string> = {
  tablet: import.meta.env.VITE_BREAKPOINT_TABLET,
  laptop: import.meta.env.VITE_BREAKPOINT_LAPTOP,
  desktop: import.meta.env.VITE_BREAKPOINT_DESKTOP
};