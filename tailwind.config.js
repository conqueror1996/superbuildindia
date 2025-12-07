/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
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
