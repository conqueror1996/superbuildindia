/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['IBM Plex Mono', 'monospace'],
                syne: ['Syne', 'sans-serif'],
            },
            colors: {
                bone: '#F2F2F0',
                charcoal: '#0D0D0D',
                copper: '#B4743A',
                concrete: '#9FA3A7',
            },
            transitionTimingFunction: {
                'apple-ease': 'cubic-bezier(0.25, 1, 0.5, 1)',
                'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
            animation: {
                'marquee': 'marquee 20s linear infinite',
                'marquee2': 'marquee2 20s linear infinite',
                'spin-slow': 'spin-slow 10s linear infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out infinite 1s',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            transitionTimingFunction: {
                'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
        },
    },
    plugins: [],
}
