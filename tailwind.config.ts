import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d1d1f', // Near Black for text
          dark: '#000000', // Pure Black
        },
        surface: {
          DEFAULT: '#f5f5f7', // Light Gray background
          dark: '#1d1d1f',
          alt: '#ffffff',
        },
        apple: {
          blue: '#0071e3', // The ONLY interactive color
          blueDark: '#0066cc',
          blueBright: '#2997ff',
          green: '#34c759', // Apple Success Green
          gray: '#86868b',
          light: '#f5f5f7',
          dark: '#1d1d1f',
          black: '#000000',
        },
        accent: {
          DEFAULT: '#0071e3', // Re-mapping accent to Apple Blue
          hover: '#0077ED',
        },
        success: {
          DEFAULT: '#34c759', // Apple Green
        },
        neutral: {
          900: '#1d1d1f',
          800: 'rgba(0, 0, 0, 0.8)',
          700: 'rgba(0, 0, 0, 0.48)',
          600: '#86868b',
          500: '#86868b',
          400: '#d2d2d7',
          300: '#e5e5ea',
          200: '#f5f5f7',
          100: '#fbfbfd',
          50: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.07', letterSpacing: '-0.28px', fontWeight: '600' }],
        'h1': ['2.5rem', { lineHeight: '1.10', fontWeight: '600' }],
        'h2': ['1.75rem', { lineHeight: '1.14', letterSpacing: '0.196px', fontWeight: '400' }],
        'h3': ['1.31rem', { lineHeight: '1.19', letterSpacing: '0.231px', fontWeight: '700' }],
        'body-lg': ['1.06rem', { lineHeight: '1.47', letterSpacing: '-0.374px', fontWeight: '400' }],
        'body': ['0.88rem', { lineHeight: '1.43', letterSpacing: '-0.224px', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'premium': 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px',
        'float': 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;
