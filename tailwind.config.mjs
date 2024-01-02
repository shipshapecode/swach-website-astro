/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        alt: '#ff0041',
        body: '#474259',
        color1: '#0b0039',
        color2: '#d2c7fd',
        'lightest-blue': '#edf7ff',
        'light-blue': '#eef7fe',
        mustard: '#ffaf14',
        peach: '#fff9f8',
        'swach-blue': '#0ae8e6',
      },
      fontFamily: {
        'gt-walsheim':
          "'GT Walsheim', 'Source Sans Pro', -apple-system BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '5.5xl': '3.75rem',
        '6xl': '4rem',
      },
      spacing: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        140: '36rem',
      },
    },
  },
  plugins: [],
};
