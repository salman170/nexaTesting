module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      rotate: {
        120: '120deg',
        10: '10deg',
      },
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
        'type-second': 'type-second 2.7s ease-out .8s infinite alternate both',
        cursor: 'cursor .6s linear infinite alternate',
        color: 'color .3s ',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '10%': { width: '2ch' },
          ' 20%': { width: '4ch' },
          ' 30%': { width: '6ch' },
          ' 40%': { width: '8ch' },
          ' 50%': { width: '10ch' },
          ' 60%': { width: '12ch' },
          // ' 70%': { width: '14ch' },
          // ' 80%': { width: '14ch' },
          ' 90%,100%': { width: '14ch' },
        },
        'type-second': {
          '0%': { width: '0ch' },
          '10%': { width: '2ch' },
          ' 20%': { width: '4ch' },
          ' 30%': { width: '6ch' },
          ' 40%': { width: '8ch' },
          ' 50%': { width: '10ch' },
          ' 60%': { width: '12ch' },
          ' 70%': { width: '14ch' },
          ' 80%': { width: '16ch' },
          ' 90%,100%': { width: '17ch' },
        },
        cursor: {
          '0%': { opacity: '0' },

          ' 30%': { opacity: '1' },

          ' 60%': { opacity: '0' },

          ' 90%': { opacity: '1' },
        },
        color: {
          '0%': { width: '0%' },
          '10%': { width: '10%' },
          ' 20%': { width: ' 20%' },
          ' 30%': { width: "30%"},
          ' 40%': { width: "40%"},
          ' 50%': { width: "50%" },
          ' 60%': { width: "60%" },
          ' 70%': { width: "70%" },
          ' 80%': { width: "80%" },
          ' 90%': { width: '90%' },
          ' 100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
