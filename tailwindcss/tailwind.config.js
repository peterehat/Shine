/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81', // Deep blue from design
          light: '#3A7CA5',
        },
        secondary: {
          DEFAULT: '#F26C4F', // Orange accent from design
          light: '#F9A26C',
        },
        neutral: {
          light: '#F5F7FA',
          dark: '#2D3748',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
