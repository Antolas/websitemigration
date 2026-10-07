import { createTheme, type Theme, type ThemeOptions } from '@mui/material/styles';
import { firaCode, inter } from './fonts';
import { palettes, type Edition } from './palettes';

function buildThemeOptions(edition: Edition) {
  const p = palettes[edition];
  return {
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: { fontFamily: inter, fontSize: '14px', fontWeight: 400, lineHeight: '18px', letterSpacing: '0.1em' },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: { '&:last-of-type': { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: inter,
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '34px',
            padding: '12px 32px',
            height: '56px',
            '@media (max-width:1200px)': {
              fontFamily: inter,
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '20px',
              padding: '10px 24px',
            },
            textTransform: 'none',
            borderRadius: '8px',
            width: 'fit-content',
            backgroundColor: p.primary[900],
            '&:hover': { backgroundColor: p.primary[700] },
            '&.Mui-disabled': { backgroundColor: p.button.disabledBackground, color: '#D7D9DB' },
          },
          containedPrimary: {
            backgroundColor: p.primary[900],
            boxShadow: 'none',
            '&:hover': { backgroundColor: p.primary[700] },
          },
          containedSecondary: {
            backgroundColor: 'transparent',
            border: `3px solid ${p.button.secondaryBorder}`,
            '&:hover': { backgroundColor: p.button.secondaryHover },
          },
        },
      },
    },
    palette: { primary: { ...p.primary }, grey: { ...p.grey } },
    typography: {
      h1: {
        fontFamily: firaCode,
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "32px",
        letterSpacing: "0.06em",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "0.06em",
        },
      },
      h2: {
        fontFamily: firaCode,
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "26px",
        letterSpacing: "0.15em",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "20px",
          letterSpacing: "0.15em",
        },
      },
      h3: {
        fontFamily: inter,
        fontWeight: 600,
        fontSize: "60px",
        lineHeight: "72px",
        letterSpacing: "0.1em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "48px",
          letterSpacing: "0.1em",
        },
      },
      h4: {
        fontFamily: firaCode,
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "48px",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "40px",
        },
      },
      h5: {
        fontFamily: firaCode,
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "28px",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      bodyXXXL: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "55px",
        lineHeight: "62.32px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "24px",
        },
      },
      bodyXXXLAltBlack: {
        fontFamily: firaCode,
        fontSize: "55px",
        fontWeight: 700,
        lineHeight: "64px",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px",
        },
        "@media (max-width:360px)": {
          fontFamily: firaCode,
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "32px",
        },
      },
      bodyXXLBlack: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "46px",
        lineHeight: "56px",
        letterSpacing: "0.1em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px",
        },
      },
      bodyXLMedium: {
        fontFamily: inter,
        fontWeight: 500,
        fontSize: "40px",
        lineHeight: "64px",
        letterSpacing: "0.03em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "32px",
          letterSpacing: "0.03em",
        },
      },
      bodyXLBlack: {
        fontFamily: inter,
        fontWeight: 900,
        fontSize: "40px",
        lineHeight: "64px",
        letterSpacing: "0.03em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 900,
          fontSize: "22px",
          lineHeight: "32px",
          letterSpacing: "0.03em",
        },
      },
      bodyL: {
        fontFamily: inter,
        fontWeight: 400,
        fontSize: "28px",
        lineHeight: "32px",
        letterSpacing: "0.08em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.08em",
        },
      },
      bodyLSemibold: {
        fontFamily: inter,
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "32px",
        letterSpacing: "0.08em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.08em",
        },
      },
      bodyLBold: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "32px",
        letterSpacing: "0.08em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.08em",
        },
      },
      bodyLAltBold: {
        fontFamily: firaCode,
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "34px",
        letterSpacing: "0.2em",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0.2em",
        },
      },
      bodyM: {
        fontFamily: inter,
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "30px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "24px",
        },
      },
      bodyMMedium: {
        fontFamily: inter,
        fontWeight: 500,
        fontSize: "22px",
        lineHeight: "30px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "20px",
        },
      },
      bodyMBold: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "22px",
        lineHeight: "30px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "20px",
        },
      },
      bodySAlt: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "34px",
        letterSpacing: "0.1em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "20px",
          letterSpacing: "0.1em",
        },
      },
      bodyS: {
        fontFamily: inter,
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "24px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
      bodyXS: {
        fontFamily: inter,
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "18px",
        letterSpacing: "0.06em",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.06em",
        },
      },
      bodyXSSemibold: {
        fontFamily: inter,
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "18px",
        "@media (max-width:1200px)": {
          fontFamily: inter,
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "16px",
        },
      },
      bodyXSAlt: {
        fontFamily: firaCode,
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "18px",
        letterSpacing: "0.05em",
        "@media (max-width:1200px)": {
          fontFamily: firaCode,
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          letterSpacing: "0.05em",
        },
      },
      bodyStickyNavBar: {
        color: "#001015",
        fontFamily: inter,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "18.13px",
      },
      bodyStickyNavBarSelected: {
        color: "#001015",
        fontFamily: inter,
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "18.13px",
      },
    },
    breakpoints: { values: { xs: 0, sm: 600, md: 1200, lg: 1200, xl: 1536 } },
  };
}

const cache = new Map<Edition, Theme>();

/** MUI theme for an edition (memoised). */
export function getTheme(edition: Edition = 'current'): Theme {
  let theme = cache.get(edition);
  if (!theme) {
    theme = createTheme(buildThemeOptions(edition) as ThemeOptions);
    cache.set(edition, theme);
  }
  return theme;
}

/** Theme of the current (2026) edition. Used for static colour lookups. */
export const theme = getTheme('current');
