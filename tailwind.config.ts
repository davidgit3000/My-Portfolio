import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'shadow-pulse': {
          '0%': {
            'box-shadow': '0 0 0 0 rgba(37, 99, 235, 0.6)',
            transform: 'scale(1)'
          },
          '50%': {
            'box-shadow': '0 0 40px 20px rgba(37, 99, 235, 0.4)',
            transform: 'scale(1.02)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 rgba(37, 99, 235, 0.6)',
            transform: 'scale(1)'
          }
        },
      },
      animation: {
        'shadow-pulse': 'shadow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.5s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.5s ease-out 0.4s forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
