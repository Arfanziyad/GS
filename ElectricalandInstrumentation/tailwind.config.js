/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0B5ED7',
        'brand-red': '#E10600',
        'brand-alt': '#F9FAFB',
        'brand-footer': '#0D1117',
        'brand-charcoal': '#111827',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'grid-white':
          'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-80': '80px 80px',
      },
    },
  },
  plugins: [],
};
