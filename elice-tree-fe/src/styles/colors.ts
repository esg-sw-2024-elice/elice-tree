const PALETTE = {
  MAIN_BLACK: '#1A1A1A',
  MAIN_BLUE: '#2D9CDB',
  MAIN_GREEN: '#3F7541',
  MAIN_PURPLE: '#7353EA',
  MAIN_RED: '#F4444E',
  LIGHT_BLACK: '#BABABA',
  LIGHT_GREEN: '#DFECE0',
  LIGHT_RED: '#FFE8E4',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GAINSBORO: '#DDDDDD',
  SOLITUDE: '#EEEFF1',
  RHINO: '#343E4B61',
  SLATE_GREY: '#6E7987',
  BLACK_PERL: '#191F28',
  PIGMENT_GREEN: '#00AB53',
  ALICE_BLUE: '#F9FAFC',
  SLATE_GREY_200: '#e5e7eb',
} as const;

type PaletteType = typeof PALETTE;
type ValueOfPalette<PaletteType> = PaletteType[keyof PaletteType];

export { PALETTE, type PaletteType, type ValueOfPalette };
