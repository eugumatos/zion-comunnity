import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '20': '1.25rem',
      },
      fontSize: {
        32: "2rem",
      },
      backgroundImage: {
        'linear-esmerald': 'linear-gradient(206deg, rgba(2,54,50,0.80) 12.04%, rgba(3,71,66,0.80) 40.88%, rgba(3,71,66,0.00) 79%)',
        'linear-morning-glory': 'linear-gradient(90deg, #A0E0DE 0%, #DAFDB8 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          700: '#111928',
          600: '#122433',
          500: '#162D40'

        },
        slate: {
          500: '#33495a',
          400: '#526379',
          300: '#637381',
          200: '#919EAB',
          100: '#7C8FA0',
          75: '#919EAB1F',
          50: '#94AEBA',
        },
        teal: {
          600: '#008980',
          500: '#00d1c4',
        },
        grey: {
          300: '#bdbec0',
        }
      },
    },
  },
  plugins: [],
};
export default config;
