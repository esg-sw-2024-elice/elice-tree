export const PALETTE = {
  MAIN_BLACK: '#1A1A1A',
  MAIN_GREEN: '#3F7541',
  MAIN_PURPLE: '#8D44F2',
  LIGHT_BLACK: '#BABABA',
  LIGHT_GREEN: '#DFECE0',
  // LIGHT_RED: '#FFE8E4',
} as const;

type PaletteType = typeof PALETTE;
type ValueOfPalette<PaletteType> = PaletteType[keyof PaletteType];

export type { PaletteType, ValueOfPalette };
