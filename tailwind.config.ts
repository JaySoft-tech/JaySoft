export default {
    content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00B090',
                    hover: '#009678',
                },
                lime: '#BAE9E1',
                black: '#000000',
                gray: {
                    dark: '#535353',
                    light: '#777777',
                },
            },
            fontFamily: {
                unbounded: ['Unbounded', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            fontSize: {
                hero: [
                    '32px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '500',
                    },
                ],
                'hero-lg': [
                    '69px',
                    {
                        lineHeight: '74.97px',
                        letterSpacing: '0%',
                        fontWeight: '500',
                    },
                ],

                'hero-desc': [
                    '14px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '300',
                    },
                ],
                'hero-desc-lg': [
                    '22px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '300',
                    },
                ],

                brand: [
                    '179px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '20%',
                        fontWeight: '500',
                    },
                ],

                'stats-number': [
                    '64px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '700',
                    },
                ],

                'stats-desc': [
                    '14px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '400',
                    },
                ],
                'stats-desc-lg': [
                    '16px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '400',
                    },
                ],

                'section-heading': [
                    '32px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '500',
                    },
                ],
                'section-heading-lg': [
                    '61px',
                    {
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: '500',
                    },
                ],
            },
        },
    },
    plugins: [],
};
