/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: [
          'var(--font-sacramento)'
        ],
        alice: [
          'var(--font-alice)'
        ],
        montserrat: [
          'var(--font-montserrat-sans)'
        ],
        playfair: [
          'var(--font-playfair-display)'
        ],
        lustria: [
          'var(--font-lustria)'
        ]
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },
    },
  },
  plugins: [],
}

