import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1326',
        surface: '#0b1326',
        'surface-container-lowest': '#060e20',
        'surface-container-low': '#161f33',
        'surface-container': '#1c2638',
        'surface-container-high': '#222a3d',
        'surface-container-highest': '#2b3448',
        primary: '#a4e6ff',
        'primary-container': '#00d1ff',
        tertiary: '#ffd59c',
        outline: '#859399',
        'outline-variant': '#3c494e',
        'on-surface': '#f1f7ff',
        'on-surface-variant': '#b7c7d5',
        'on-primary': '#001018',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(164, 230, 255, 0.18)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #a4e6ff 0%, #00d1ff 100%)',
        'grid-overlay': 'radial-gradient(circle at 1px 1px, rgba(60, 73, 78, 0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid-overlay': '24px 24px',
      },
    },
  },
  plugins: [],
}

export default config
