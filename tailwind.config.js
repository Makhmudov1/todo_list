/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './pages/index.vue',
      './components/TaskItem.vue',
      './assets/css/tailwind.css'
  ],
    theme: {
      borderRadius:{
          DEFAULT:'0.313rem',
          lg:'0.625rem',
      },
        screens: {
            sm: '640px',
            md: '960px',
            lg: '1200px',
            xl: '1802px',
        },
        container: {
            padding: {
                DEFAULT: '12px',
                sm: '32px',
                lg: '82px',
                xl: '23px',
            },
            center: true,
        },
        fontSize: {
            h1: [
                '40px',
                {
                    lineHeight: '150%',
                    letterSpacing: '-0.01em',
                },
            ],
            h2: [
                '36px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            h3: [
                '28px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            h4: [
                '26px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            'h5-bold': [
                '24px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            h5: [
                '24px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            20: [
                '20px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            18: [
                '18px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            16: [
                '16px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            14: [
                '14px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            12: [
                '12px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
            10: [
                '10px',
                {
                    lineHeight: '125%',
                    letterSpacing: '-0.01em',
                },
            ],
        },
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#DE0B10',
                    12: '#FBE1E2',
                    8: '#FDECEC',
                },
                positive: '#1A9B5C',
                background: {
                    primary: '#FFFFFF',
                    secondary: '#F5F5F5',
                    tertiary: '#ECECEC',
                },
                content: {
                    primary: '#121212',
                    secondary: '#5B5B5B',
                    tertiary: {
                        DEFAULT: '#ADADAD',
                        30: '#E7E7E7',
                        50: '#D7D7D7',
                    },
                },
                transitionProperty: {
                    size: 'height, width',
                },
            },
            fontFamily: {
                segoe: ['Segoe UI', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                button: '0px 4px 9px rgba(53, 53, 53, 0.4)',
                soft_elevation: '0px 4px 18px rgba(53, 53, 53, 0.05)',
                'hover-small-button': '0px 3px 6px rgba(117, 117, 117, 0.35)',
            },
            transitionProperty: {
                'color-and-shadow': 'background-color, color, box-shadow',
            },
            backgroundImage: {
                'button-hover':
                    'linear-gradient(94.74deg, #DE0B11 4.15%, #E9666A 95.02%, #FAFAFA 143.73%);',
            },
        },
    },
}

