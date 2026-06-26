// DEFAULT: no network calls required to build — uses a safe system font
// stack so `npm run build` always works, even with no internet access.
// This avoids depending on Google Fonts at build time.
export const fontPrimary = { variable: '--font-primary' };
export const fontSecondary = { variable: '--font-secondary' };

/*
  SWAP IN YOUR PROVIDED HACKATHON FONTS (do this for full asset-compliance points):
  1. Drop the two font files from asset_package.zip into /public/fonts/
  2. Replace the two export lines above with:

  import localFont from 'next/font/local';

  export const fontPrimary = localFont({
    src: '../public/fonts/YOUR-HEADING-FONT.woff2',
    variable: '--font-primary',
    display: 'swap',
  });

  export const fontSecondary = localFont({
    src: '../public/fonts/YOUR-BODY-FONT.woff2',
    variable: '--font-secondary',
    display: 'swap',
  });

  (next/font/local works fully offline and doesn't hit any network at build time)
*/

