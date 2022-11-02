/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      touch: '#FC5956',
      f8: '#F8F8F8',
      lightG: '#54BAAB',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}
