import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111111',
          // O token chamava-se `mint` e valia '#FF0005' — vermelho puro. A
          // paleta foi trocada de menta para vermelho em algum momento e o
          // nome nunca acompanhou, entao quem escrevia `text-brand-mint`
          // esperando verde recebia vermelho. `mint` continua como apelido
          // para nao quebrar as ~600 ocorrencias ja escritas no codigo.
          //
          // O valor tambem mudou: '#FF0005' e vermelho de alerta, saturacao
          // maxima — comunica perigo, nao sofisticacao. '#C8102E' carrega a
          // mesma forca e le como marca, nao como aviso de erro.
          red: '#C8102E',
          mint: '#C8102E',
          light: '#E23148',
          bg: '#F5F5F5',
        },
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
