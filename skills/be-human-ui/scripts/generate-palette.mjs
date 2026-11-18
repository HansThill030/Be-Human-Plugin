// Zero-dependency WCAG-checked Hex Palette & CSS Token Generator
// Usage: node generate-palette.mjs [devtools|fintech|editorial|consumer] [light|dark]

const preset = (process.argv[2] || 'devtools').toLowerCase();
const mode = (process.argv[3] || 'light').toLowerCase();

const PALETTES = {
  devtools: {
    light: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      muted: '#F4F4F5',
      inkPrimary: '#111113',
      inkSecondary: '#52525B',
      border: '#E4E4E7',
      accent: '#0F766E',
      accentSecondary: '#1D4ED8',
    },
    dark: {
      canvas: '#0C0D10',
      surface: '#14161B',
      muted: '#1C1F26',
      inkPrimary: '#F4F4F5',
      inkSecondary: '#A1A1AA',
      border: '#272A34',
      accent: '#14B8A6',
      accentSecondary: '#60A5FA',
    },
  },
  fintech: {
    light: {
      canvas: '#F8FAFC',
      surface: '#FFFFFF',
      muted: '#F1F5F9',
      inkPrimary: '#0F172A',
      inkSecondary: '#475569',
      border: '#E2E8F0',
      accent: '#0369A1',
      accentSecondary: '#047857',
    },
    dark: {
      canvas: '#090D16',
      surface: '#111827',
      muted: '#1E293B',
      inkPrimary: '#F8FAFC',
      inkSecondary: '#94A3B8',
      border: '#293548',
      accent: '#38BDF8',
      accentSecondary: '#34D399',
    },
  },
  editorial: {
    light: {
      canvas: '#F9F9F7',
      surface: '#FFFFFF',
      muted: '#EFEFE9',
      inkPrimary: '#161614',
      inkSecondary: '#57574F',
      border: '#E0E0D8',
      accent: '#1E3A8A',
      accentSecondary: '#B45309',
    },
    dark: {
      canvas: '#121210',
      surface: '#1A1A17',
      muted: '#242420',
      inkPrimary: '#F5F5F0',
      inkSecondary: '#A8A89E',
      border: '#2E2E29',
      accent: '#60A5FA',
      accentSecondary: '#FBBF24',
    },
  },
  consumer: {
    light: {
      canvas: '#FFFFFF',
      surface: '#F7F7F8',
      muted: '#EEEEF0',
      inkPrimary: '#18181B',
      inkSecondary: '#52525B',
      border: '#E4E4E7',
      accent: '#E11D48',
      accentSecondary: '#0D9488',
    },
    dark: {
      canvas: '#101012',
      surface: '#18181B',
      muted: '#222226',
      inkPrimary: '#FAFAFA',
      inkSecondary: '#A1A1AA',
      border: '#2C2C32',
      accent: '#FB7185',
      accentSecondary: '#2DD4BF',
    },
  },
};

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const n = parseInt(clean, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function relLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const l1 = relLuminance(hexToRgb(hex1));
  const l2 = relLuminance(hexToRgb(hex2));
  const [bright, dark] = l1 > l2 ? [l1, l2] : [l2, l1];
  return Number(((bright + 0.05) / (dark + 0.05)).toFixed(2));
}

const p = (PALETTES[preset] || PALETTES.devtools)[mode === 'dark' ? 'dark' : 'light'];

const report = {
  preset,
  mode,
  palette: p,
  wcagContrast: {
    inkPrimaryOnCanvas: contrastRatio(p.inkPrimary, p.canvas),
    inkSecondaryOnCanvas: contrastRatio(p.inkSecondary, p.canvas),
    inkPrimaryOnSurface: contrastRatio(p.inkPrimary, p.surface),
    inkSecondaryOnSurface: contrastRatio(p.inkSecondary, p.surface),
  },
  cssVariables: `:root {
  --bg-canvas: ${p.canvas};
  --bg-surface: ${p.surface};
  --bg-muted: ${p.muted};
  --ink-primary: ${p.inkPrimary};
  --ink-secondary: ${p.inkSecondary};
  --border-hairline: ${p.border};
  --accent-primary: ${p.accent};
  --accent-secondary: ${p.accentSecondary};
}`,
};

console.log(JSON.stringify(report, null, 2));
