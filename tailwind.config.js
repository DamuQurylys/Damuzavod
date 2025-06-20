/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // захватывает все страницы и компоненты
  ],
  theme: {
    extend: {
      fontFamily: {
        // Основной шрифт по умолчанию для всего сайта
        sans: ['Anton', 'sans-serif'],

        // Альтернативный шрифт (если решим использовать Inter для текста)
        inter: ['Inter', 'sans-serif'],

        // Отдельно для заголовков, если понадобится сделать акцент
        display: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
