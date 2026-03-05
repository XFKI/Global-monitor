/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#070c12',
				surface: '#0d1724',
				'surface-2': '#132033',
				'surface-hover': '#1a2b3e',
				border: '#1e3248',
				'border-light': '#2a4560',
				'text-primary': '#c8daea',
				'text-dim': '#5e7a94',
				'text-muted': '#3a5268',
				accent: '#00cfff',
				danger: '#f85149',
				success: '#2dce6a',
				warning: '#ffba00',
				info: '#4d8aff'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['SF Mono', 'Fira Code', 'JetBrains Mono', 'monospace']
			},
			fontSize: {
				'2xs': '0.65rem'
			},
			animation: {
				shimmer: 'shimmer 1.5s infinite'
			},
			keyframes: {
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			}
		}
	},
	plugins: []
};
