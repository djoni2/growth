/**
 * Build the stylesheet after editing index.html:
 *
 *   npx tailwindcss@3.4.17 -i tailwind.src.css -o styles.css --minify
 *
 * index.html used to pull cdn.tailwindcss.com, which ships the compiler to the
 * browser and generates CSS at runtime - render-blocking, and a flash of
 * unstyled content on every visit. styles.css is that output, built ahead of
 * time. New utility classes only appear after a rebuild.
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Newsreader"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#FAF8F4',
          surface: '#FFFFFF',
          border: '#DBD5C8',
          accent: '#B2431C',
          accentHover: '#963412',
          accentLight: 'rgba(178, 67, 28, 0.10)',
          heading: '#141311',
          body: '#2A2824',
          muted: '#635E54',
          subtle: '#F1ECE2',
        },
      },
    },
  },
  plugins: [],
};
