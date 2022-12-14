/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'heading': ['Roboto', 'sans-serif'],
                'body': ['Noto Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
