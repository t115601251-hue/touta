/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        parch:'#E6D9B8', 'parch-2':'#F0E8D2', ink:'#2E2A22', 'ink-soft':'#8C7F63',
        bracket:'#4A4032', wax:'#9C3B2C', 'wax-deep':'#7E2E22', amber:'#E0962F',
        teal:'#5FD6D0', gold:'#B69B66',
        leather:'#5b3a24', 'leather-2':'#412816', wood:'#6b4528',
      },
      fontFamily: { roman:['"Cinzel"','serif'], song:['"Noto Serif SC"','"Cinzel"','serif'] },
    },
  },
  safelist: ['hidden','opacity-60','pointer-events-none','inline-flex','items-center','gap-1.5','blurred'],
}
