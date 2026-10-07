import type { CSSProperties } from 'react';

/** Custom typography variants of the Platmosphere design system. */
type CustomVariants = {
  bodyXXXL: CSSProperties;
  bodyXXXLAltBlack: CSSProperties;
  bodyXXLBlack: CSSProperties;
  bodyXLMedium: CSSProperties;
  bodyXLBlack: CSSProperties;
  bodyL: CSSProperties;
  bodyLSemibold: CSSProperties;
  bodyLBold: CSSProperties;
  bodyLAltBold: CSSProperties;
  bodyM: CSSProperties;
  bodyMMedium: CSSProperties;
  bodyMBold: CSSProperties;
  bodySAlt: CSSProperties;
  bodyS: CSSProperties;
  bodyXS: CSSProperties;
  bodyXSSemibold: CSSProperties;
  bodyXSAlt: CSSProperties;
  bodyStickyNavBar: CSSProperties;
  bodyStickyNavBarSelected: CSSProperties;
};
type CustomVariantFlags = {
  bodyXXXL: true;
  bodyXXXLAltBlack: true;
  bodyXXLBlack: true;
  bodyXLMedium: true;
  bodyXLBlack: true;
  bodyL: true;
  bodyLSemibold: true;
  bodyLBold: true;
  bodyLAltBold: true;
  bodyM: true;
  bodyMMedium: true;
  bodyMBold: true;
  bodySAlt: true;
  bodyS: true;
  bodyXS: true;
  bodyXSSemibold: true;
  bodyXSAlt: true;
  bodyStickyNavBar: true;
  bodyStickyNavBarSelected: true;
};

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomVariants {}
  interface TypographyVariantsOptions extends Partial<CustomVariants> {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends CustomVariantFlags {}
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    500: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }
}

declare module '@mui/material' {
  interface Color {
    25: string;
    950: string;
  }
}

export {};
