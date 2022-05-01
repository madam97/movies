import TBreakpoint from './types/TBreakpoint'

export const defBreakpoints: Record<TBreakpoint, string> = {
  tablet: import.meta.env.VITE_BREAKPOINT_TABLET,
  laptop: import.meta.env.VITE_BREAKPOINT_LAPTOP,
  desktop: import.meta.env.VITE_BREAKPOINT_DESKTOP
};