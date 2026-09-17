/**
 * DYNAMIC THEMES REGISTRY
 * 
 * NOTE: This is dynamic and NOT hardcoded.
 * Adding a 6th or 7th theme here will automatically propagate across all 50 industries,
 * dropdowns, switcher bars, and route handlers without modifying any other code.
 */

export const THEMES_CONFIG = [
  {
    id: 1,
    slug: 'theme-1',
    name: 'Theme 1: Editorial Elegance',
    shortName: 'Editorial Elegance',
    badge: 'Editorial & Refined',
    description: 'High-end bespoke editorial aesthetic with generous whitespace, luxury typography, and high-trust framing.',
    styleArchetype: 'editorial',
    accentTag: 'Premium Studio',
  },
  {
    id: 2,
    slug: 'theme-2',
    name: 'Theme 2: High-Tech Modern',
    shortName: 'High-Tech Modern',
    badge: 'Futuristic & Kinetic',
    description: 'Dark glassmorphism, dynamic glowing micro-borders, live metric counters, and sleek tech accents.',
    styleArchetype: 'hightech',
    accentTag: 'Next-Gen Interface',
  },
  {
    id: 3,
    slug: 'theme-3',
    name: 'Theme 3: Bold Kinetic',
    shortName: 'Bold Kinetic',
    badge: 'High Impact & Vivid',
    description: 'Heavy typography hierarchy, vivid contrast ribbons, aggressive conversion hooks, and fast action CTAs.',
    styleArchetype: 'kinetic',
    accentTag: 'High Conversion',
  },
  {
    id: 4,
    slug: 'theme-4',
    name: 'Theme 4: Minimal Luxe',
    shortName: 'Minimal Luxe',
    badge: 'Understated Luxury',
    description: 'Precise geometric grid, understated elegance, monochromatic balance with soft peach warmth.',
    styleArchetype: 'minimal',
    accentTag: 'Pure Aesthetic',
  },
  {
    id: 5,
    slug: 'theme-5',
    name: 'Theme 5: Warm Craft',
    shortName: 'Warm Craft',
    badge: 'Human & Approachable',
    description: 'Friendly trust badges, organic pill curves, warm communal aesthetic, and conversational booking paths.',
    styleArchetype: 'warmcraft',
    accentTag: 'Community Favorite',
  },
];

/**
 * Returns theme by ID or index, defaulting gracefully to Theme 1 if out of bounds.
 */
export function getThemeById(themeId) {
  const numericId = parseInt(themeId, 10);
  const found = THEMES_CONFIG.find((t) => t.id === numericId);
  return found || THEMES_CONFIG[0];
}

/**
 * Get total themes count dynamically
 */
export const TOTAL_THEMES_COUNT = THEMES_CONFIG.length;
