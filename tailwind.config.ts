import type { Config } from "tailwindcss";
// --- NEW: Import the plugin function ---
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#046DFC',
					foreground: '#FFFFFF',
					dark: '#0056CC'
				},
				secondary: {
					DEFAULT: '#68E2E7',
					foreground: '#121A2F',
					dark: '#4ACDD6'
				},
				accent: {
					DEFAULT: '#68E2E7',
					foreground: '#121A2F'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F5F5F5',
					foreground: '#666666'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				navy: {
					DEFAULT: '#121A2F',
					light: '#1A2B47',
					dark: '#0A1220',
					800: '#1A2B47'
				},
				charcoal: {
					DEFAULT: '#1A1A1A',
					light: '#2A2A2A',
					dark: '#0F0F0F',
					800: '#2A2A2A'
				},
				'tech-blue': {
					600: '#046DFC'
				},
				cyan: {
					400: '#22d3ee',
					600: '#0891b2'
				}
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #68E2E7 0%, #046DFC 100%)',
				'gradient-dark': 'linear-gradient(135deg, #121A2F 0%, #1A1A1A 100%)',
				'gradient-section': 'linear-gradient(180deg, #121A2F 0%, #1A1A1A 50%, #121A2F 100%)',
				'gradient-tech': 'linear-gradient(135deg, #68E2E7 0%, #046DFC 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px #68E2E7' },
					'50%': { boxShadow: '0 0 20px #68E2E7, 0 0 30px #046DFC' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
			}
		}
	},
    // --- UPDATED PLUGINS ARRAY ---
	plugins: [
        require("tailwindcss-animate"),
        // Custom plugin for 3D transforms and backface visibility
        plugin(function ({ addUtilities }) {
            addUtilities({
              '.transform-style-3d': {
                'transform-style': 'preserve-3d',
              },
              '.backface-hidden': {
                'backface-visibility': 'hidden',
              },
            });
        }),
    ],
} satisfies Config;