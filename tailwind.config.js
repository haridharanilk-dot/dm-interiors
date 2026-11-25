/** Brand design system – change colours/fonts here only. */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        walnut: '#3E362E',   // Dark Walnut – nav, dark sections, text
        bronze: '#865D36',   // Rich Brown – highlights, CTAs
        taupe: '#93785B',
        sand: '#AC8968',     // Warm Sand
        beige: '#A69080',    // Muted Beige – subtle cards
        ivory: '#F7F4EF',    // Warm Ivory – main background
        paper: '#FCFAF7',    // Off White
        charcoal: '#211F1C', // Deep Charcoal
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk Variable"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.04em' },
    },
  },
  plugins: [],
};
