import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#bdfe00',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primary1: '#161c00',
  			primary2: '#161c00',
  			primary3: '#1BBEAB',
  			primary4: '#00B67A',
  			neutral1: '#f4f4f5',
  			neutral2: '#26262b',
  			neutral3: '#dfdfe2',
  			neutral5: '#fcfcfd',
  			neutral6: '#f4f4f4',
  			black1: '#131316',
  			black2: '#17171a',
  			black3: '#2e2e33',
  			gray1: '#bebec6',
  			gray2: '#ffffff1a',
  			gray3: '#4a4b54',
  			gray4: '#ffffff0d',
  			gray5: '#7f8090',
  			gray6: '#D1D5DB',
  			gray7: '#4B5563',
  			gray8: '#F9FAFB',
  			blue1: '#0072DE',
  			green1: '#38A17E',
  			'hover-nav-link': '#fcfcfd0a',
  			'purple-4': '#eae6ff',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			}
  		},
  		fontFamily: {
  			geist: 'var(--font-geist-sans)',
  			noto_sans_arabic: 'var(--font-noto_sans_arabic)'
  		},
  		fontSize: {
  			'56': [
  				'56px',
  				'120%'
  			],
  			'32': [
  				'32px',
  				'120%'
  			],
  			'40': [
  				'40px',
  				'120%'
  			],
  			'28': [
  				'28px',
  				'120%'
  			]
  		},
  		screens: {
  			xs: '320px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		backgroundImage: {
  			'btn-gradient1': 'linear-gradient(#fcfcfd, #f4f4f5)',
  			'btn-gradient2': 'linear-gradient(#f4f4f5, #dfdfe2)'
  		},
  		boxShadow: {
  			'10xl': '0 0 0 4px #1bbeab24'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
