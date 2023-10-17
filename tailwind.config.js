/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'darker': ['Darker Grotesque', 'sans-serif']
      },
      screens: {
        "mb": "425px",
        "3xl": "1600px"
      },
      backgroundImage: {
        'video': "url('assets/video.png')"
      },
      colors: {
        'primary': "#F6D88C",
        'secondary': "#181817",
        'gray-color': "#6F6F6F",
        'white-color': "#F8F3EC"
      }
    },
  },
  plugins: [],
}

