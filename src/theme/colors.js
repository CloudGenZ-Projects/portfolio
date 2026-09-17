/**
 * THEME COLOR TOKENS & ARCHETYPAL PALETTES
 * Modern, clean, minimal palette for the main website shell:
 * - Crisp slate canvas (#F8FAFC)
 * - Refined white header with subtle border (#E2E8F0)
 * - Deep slate typography (#0F172A)
 * - Clean modern blue accent (#2563EB)
 */

export const STUDIO_PALETTE = {
  bg: '#EDF2F7',             // Soft architectural slate mist canvas
  navbar: '#DFE5EC',         // Refined steel-slate header (neither harsh dark nor blinding white)
  navbarBorder: '#CBD5E1',   // Clean structural hairline border
  surface: '#FFFFFF',        // Card surface
  surfaceBorder: '#E2E8F0',  // Card hairline border
  surfaceHoverBorder: '#94A3B8',
  
  textPrimary: '#1E293B',    // Slate charcoal (gentle, high contrast without pure black)
  textSecondary: '#475569',  // Cool muted slate
  textMuted: '#64748B',
  
  accent: '#2563EB',         // Sapphire action accent
  accentHover: '#1D4ED8',
  accentSubtle: '#E0E7FF',
};

export const THEME_PALETTES = {
  // Theme 1: Editorial Elegance (Clean luxury editorial serif)
  1: {
    name: 'Editorial Elegance',
    canvas: '#FBF9F5',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4F0E8',
    textPrimary: '#1A1918',
    textSecondary: '#57534E',
    accent: '#8C4A26',
    accentHover: '#723B1E',
    border: '#E7E2D7',
    borderStrong: '#1A1918',
    fontDisplay: 'font-editorial',
  },
  // Theme 2: High-Tech Modern (Engineering telemetry)
  2: {
    name: 'High-Tech Modern',
    canvas: '#0B0F17',
    surface: '#111723',
    surfaceSubtle: '#182030',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    accent: '#0EA5E9',
    accentHover: '#38BDF8',
    border: '#1E293B',
    borderStrong: '#334155',
    fontDisplay: 'font-tech',
  },
  // Theme 3: Bold Kinetic (Typographic energy)
  3: {
    name: 'Bold Kinetic',
    canvas: '#0A0A0A',
    surface: '#141414',
    surfaceSubtle: '#1C1C1C',
    textPrimary: '#FFFFFF',
    textSecondary: '#A3A3A3',
    accent: '#FF3B00',
    accentHover: '#E03400',
    border: '#262626',
    borderStrong: '#FF3B00',
    fontDisplay: 'font-kinetic',
  },
  // Theme 4: Minimal Luxe (Swiss architectural)
  4: {
    name: 'Minimal Luxe',
    canvas: '#F4F3F0',
    surface: '#FFFFFF',
    surfaceSubtle: '#ECEAE4',
    textPrimary: '#141413',
    textSecondary: '#66635D',
    accent: '#8A7761',
    accentHover: '#6E5F4D',
    border: '#E2E0D8',
    borderStrong: '#141413',
    fontDisplay: 'font-minimal',
  },
  // Theme 5: Warm Craft (Communal storytelling)
  5: {
    name: 'Warm Craft',
    canvas: '#FAF7F2',
    surface: '#FFFFFF',
    surfaceSubtle: '#F2ECE1',
    textPrimary: '#262422',
    textSecondary: '#5C564E',
    accent: '#2C4A3E',
    accentHover: '#1E332B',
    amber: '#D97706',
    border: '#E6DED2',
    borderStrong: '#2C4A3E',
    fontDisplay: 'font-craft',
  },
};

export const BRAND_CONFIG = {
  primary: STUDIO_PALETTE.accent,
  canvas: STUDIO_PALETTE.bg,
  surface: STUDIO_PALETTE.surface,
  border: STUDIO_PALETTE.border,
  text: STUDIO_PALETTE.textPrimary,
};

export function applyThemeTokens() {
  // Handled dynamically
}
