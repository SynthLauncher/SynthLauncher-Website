import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},

  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},

  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},

  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},

  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},

  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},

  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},

  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},

			"footer-dark": "#101010",
			"card-gray": "#B5B5B5",
  		},

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		fontFamily: {
			nunito: 'var(--font-nunito)',
			lato: 'var(--font-lato)',

			'open-sans': 'var(--font-open-sans)',
		},

		fontWeight: {
			'lato-100': '100',
			'lato-300': '300',
			'lato-400': '400',
			'lato-700': '700',
			'lato-900': '900',

			'nunito-200': '200',
			'nunito-300': '300',
			'nunito-400': '400',
			'nunito-500': '500',
			'nunito-600': '600',
			'nunito-700': '700',
			'nunito-800': '800',
			'nunito-900': '900',
			'nunito-1000': '1000',

			'open-sans-300': '300',
			'open-sans-400': '400'
		},

		backgroundImage: {
			hero: "url('/hero.png')",

			"gold-gradient": "linear-gradient(135deg, rgba(255,85,0,1) 0%, rgba(255,110,0,1) 25%, rgba(255,152,0,1) 50%, rgba(255,155,0,1) 75%, rgba(255,178,0,1) 100%)",
			
			"steel-gradient": "linear-gradient(135deg, rgba(86,86,86,1) 0%, rgba(77,77,77,1) 25%, rgba(51,51,51,1) 50%, rgba(60,60,60,1) 75%, rgba(52,52,52,1) 100%)",
		
			"orange-purple-gradient": "linear-gradient(155deg, rgba(255,115,0,1) 0%, rgba(184,86,255,1) 100%);",
		}
  	}
  },
  plugins: [
	require('tailwindcss-animate'),
  ],
} satisfies Config;
