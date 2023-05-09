/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Gmarket: ['GmarketSans', 'sans-serif'], // 한글폰트
        Balsamiq: ['Balsamiq Sans', 'rsive'], // 영문 폰트
        NanumMyeongjo: ['Nanum Myeongjo', 'serif'], // 영문 폰트
      },
    },
  },
  plugins: [],
};
