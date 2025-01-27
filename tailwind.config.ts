import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      lato: ['var(--font-lato)', 'sans-serif'],
      klavika: ['klavika-web', 'sans-serif'],
    },
    colors: {
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      blue: {
        50: 'var(--color-blue-50)',
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)',
        950: 'var(--color-blue-950)',
      },
      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
        950: 'var(--color-gray-950)',
      },
      green: {
        50: 'var(--color-green-50)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
        950: 'var(--color-green-950)',
      },
      lightBlue: {
        50: 'var(--color-lightBlue-50)',
        100: 'var(--color-lightBlue-100)',
        200: 'var(--color-lightBlue-200)',
        300: 'var(--color-lightBlue-300)',
        400: 'var(--color-lightBlue-400)',
        500: 'var(--color-lightBlue-500)',
        600: 'var(--color-lightBlue-600)',
        700: 'var(--color-lightBlue-700)',
        800: 'var(--color-lightBlue-800)',
        900: 'var(--color-lightBlue-900)',
        950: 'var(--color-lightBlue-950)',
      },
      orange: {
        50: 'var(--color-orange-50)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
        950: 'var(--color-orange-950)',
      },
      red: {
        50: 'var(--color-red-50)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
        950: 'var(--color-red-950)',
      },
      yellow: {
        50: 'var(--color-yellow-50)',
        100: 'var(--color-yellow-100)',
        200: 'var(--color-yellow-200)',
        300: 'var(--color-yellow-300)',
        400: 'var(--color-yellow-400)',
        500: 'var(--color-yellow-500)',
        600: 'var(--color-yellow-600)',
        700: 'var(--color-yellow-700)',
        800: 'var(--color-yellow-800)',
        900: 'var(--color-yellow-900)',
        950: 'var(--color-yellow-950)',
      },
      content: {
        primary: 'var(--color-black)',
        secondary: 'var(--color-gray-800)',
        tertiary: 'var(--color-gray-600)',
        accent: 'var(--color-red-600)',
        inverse: 'var(--color-white)',
      },
      bg: {
        primary: 'var(--color-white)',
        secondary: 'var(--color-gray-50)',
        inverse: 'var(--color-black)',
      },
    },
    boxShadow: {
      itemshelf: '0px 1px 0px 1px rgba(255, 255, 255, 0.30) inset, 0px -1px 0px 1px rgba(255, 255, 255, 0.51) inset, 0px 0px 0px 2px var(--color-gray-50)',
      'big-red': '0px -8px 31.3px -1px var(--color-red-800) inset, 0px 2px 0px 2px var(--color-red-200)',
      'single-select': '0px -2px 0px 0px rgba(0, 0, 0, 0.25)',
      'multi-select': '0px -2px 0px 0px rgba(0, 0, 0, 0.25) inset',
      progressbar: '0px 2px 14.9px -7px rgba(0, 0, 0, 0.25) inset',
      'progressbar-progress': '0px 2px 5px 0px var(--color-red-200), 0px -1px 4px 1px var(--color-red-400) inset',
    },
    backgroundImage: {
      'red-button': 'radial-gradient(77.17% 77.17% at 50% 26.7%, #C4122F 30.95%, #96071E 100%)',
      'selector-active': 'linear-gradient(180deg, #E02A48 0%, #96071E 100%)',
      'selector-inactive': 'linear-gradient(180deg, #9BA5AB 0%, #6F7D85 100%)',
      progressbar: 'linear-gradient(180deg, #EAEEF1 0%, #D9DFE3 100%)',
      'progressbar-progress': 'linear-gradient(180deg, #E02A48 0%, #C4122F 100%)',
    },
    borderRadius: {
      full: '9999rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      buttonHighlightActive: '0.375rem',
      buttonHighlightFocus: '0.625rem',
    },
    extend: {
      spacing: {
        buttonFauxHeight: '-0.1875rem',
        buttonFauxHeightActive: '-0.125rem',
        buttonFauxHeightDisabled: '-0.125rem',
      },
      colors: {
        text: '#1E1F24',
      },
      fontSize: {
        'title-large': [
          '28px',
          {
            lineHeight: '35px',
            fontWeight: '700',
          },
        ],
        title: [
          '24px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        subheadline: [
          '18px',
          {
            lineHeight: '22px',
            fontWeight: '600',
          },
        ],
        footnote: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '500',
          },
        ],
        body: [
          '13px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        caption: [
          '9px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        'button-primary': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '600',
            letterSpacing: '1px',
            // textEdge: 'cap',
            // leadingTrim: 'both',
          },
        ],
        'button-primary-focus': [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '600',
            letterSpacing: '1px',
            // textEdge: 'cap',
            // leadingTrim: 'both',
          },
        ],
        'button-secondary': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '700',
            letterSpacing: '1px',
            // fontFeatureSettings: '"liga" off',
          },
        ],
        'button-secondary-focus': [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '700',
            letterSpacing: '1px',
            // fontFeatureSettings: '"liga" off',
          },
        ],
        'gamification-multiplier': [
          '40px',
          {
            lineHeight: '35px',
            fontWeight: '600',
            // textShadow: '0px 0px 1px var(--color-red-200, #FF8B9E)',
          },
        ],
        'gamification-xp': [
          '32px',
          {
            lineHeight: '35px',
            fontWeight: '700',
            // textAlign: 'center',
          },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // Base button styles
        '.btn-primary': {
          overflow: 'hidden',
          display: 'flex',
          width: '100%',
          padding: '12px 4px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '4px',
        },
        '.btn-secondary': {
          overflow: 'hidden',
          display: 'flex',
          width: '100%',
          padding: '12px 4px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '4px',
        },
        '.btn-tertiary': {
          overflow: 'hidden',
          display: 'flex',
          width: '100%',
          padding: '12px 4px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '4px',
        },
        '.btn-outline': {
          overflow: 'hidden',
          display: 'flex',
          width: '100%',
          padding: '12px 4px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '4px',
        },

        // Primary states
        '.btn-primary-default': {
          color: 'var(--color-button-primary-text-default)',
          backgroundColor: 'var(--color-button-primary-bg-default)',
          boxShadow: '0px -3px 0px 0px var(--color-button-primary-fauxHeight-default)',
        },
        '.btn-primary-active': {
          color: 'var(--color-button-primary-text-active)',
          backgroundColor: 'var(--color-button-primary-bg-active)',
          boxShadow: '0px 0px 0px 6px var(--color-button-primary-highlight-active), 0px -2px 0px 0px var(--color-button-primary-fauxHeight-active)',
        },
        '.btn-primary-focus': {
          color: 'var(--color-button-primary-text-focus)',
          backgroundColor: 'var(--color-button-primary-bg-focus)',
          boxShadow: '0px 0px 0px 10px var(--color-button-primary-highlight-focus), 0px -3px 0px 0px var(--color-button-primary-fauxHeight-focus)',
        },
        '.btn-primary-disabled': {
          color: 'var(--color-button-primary-text-disabled)',
          backgroundColor: 'var(--color-button-primary-bg-disabled)',
          boxShadow: '0px -2px 0px 0px var(--color-button-primary-fauxHeight-disabled)',
        },

        // Secondary states
        '.btn-secondary-default': {
          color: 'var(--color-button-secondary-text-default)',
          background: 'var(--color-button-secondary-bg-default)',
          boxShadow: '0px -3px 0px 0px var(--color-button-secondary-fauxHeight-default)',
        },
        '.btn-secondary-active': {
          color: 'var(--color-button-secondary-text-active)',
          background: 'var(--color-button-secondary-bg-active)',
          boxShadow: '0px 0px 0px 6px var(--color-button-secondary-highlight-active), 0px -2px 0px 0px var(--color-button-secondary-fauxHeight-active)',
        },
        '.btn-secondary-focus': {
          color: 'var(--color-button-secondary-text-focus)',
          background: 'var(--color-button-secondary-bg-focus)',
          boxShadow: '0px 0px 0px 10px var(--color-button-secondary-highlight-focus), 0px -3px 0px 0px var(--color-button-secondary-fauxHeight-focus)',
        },
        '.btn-secondary-disabled': {
          color: 'var(--color-button-secondary-text-disabled)',
          background: 'var(--color-button-secondary-bg-disabled)',
          boxShadow: '0px -2px 0px 0px var(--color-button-secondary-fauxHeight-disabled)',
        },

        // Tertiary states
        '.btn-tertiary-default': {
          color: 'var(--color-button-tertiary-text-default)',
          background: 'var(--color-button-tertiary-bg-default)',
        },
        '.btn-tertiary-active': {
          color: 'var(--color-button-tertiary-text-active)',
          background: 'var(--color-button-tertiary-bg-active)',
          boxShadow: '0px 0px 0px 6px var(--color-button-tertiary-highlight-active)',
        },
        '.btn-tertiary-focus': {
          color: 'var(--color-button-tertiary-text-focus)',
          background: 'var(--color-button-tertiary-bg-focus)',
          boxShadow: '0px 0px 0px 10px var(--color-button-tertiary-highlight-focus)',
        },
        '.btn-tertiary-disabled': {
          color: 'var(--color-button-tertiary-text-disabled)',
          background: 'var(--color-button-tertiary-bg-disabled)',
        },

        // Outline states
        '.btn-outline-default': {
          color: 'var(--color-button-outline-text-default)',
          border: '2px solid var(--color-button-outline-stroke-default)',
          background: 'var(--color-button-outline-bg-default)',
          boxShadow: '0px -3px 0px 0px var(--color-button-outline-fauxHeight-default)',
        },
        '.btn-outline-active': {
          color: 'var(--color-button-outline-text-active)',
          border: '2px solid var(--color-button-outline-stroke-active)',
          background: 'var(--color-button-outline-bg-active)',
          boxShadow: '0px 0px 0px 6px var(--color-button-outline-highlight-active), 0px -2px 0px 0px var(--color-button-outline-fauxHeight-active)',
        },
        '.btn-outline-focus': {
          color: 'var(--color-button-outline-text-focus)',
          border: '2px solid var(--color-button-outline-stroke-focus)',
          background: 'var(--color-button-outline-bg-focus)',
          boxShadow: '0px 0px 0px 10px var(--color-button-outline-highlight-focus), 0px -3px 0px 0px var(--color-button-outline-fauxHeight-focus)',
        },
        '.btn-outline-disabled': {
          color: 'var(--color-button-outline-text-disabled)',
          border: '2px solid var(--color-button-outline-stroke-disabled)',
          background: 'var(--color-button-outline-bg-disabled)',
          boxShadow: '0px -2px 0px 0px var(--color-button-outline-fauxHeight-disabled)',
        },

        // UI component
        '.ui-itemshelf': {
          display: 'flex',
          padding: '7px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '60px',
          backgroundColor: 'var(--color-content-primary)',
          boxShadow: '0px 1px 0px 1px rgba(255, 255, 255, 0.30) inset, 0px -1px 0px 1px rgba(255, 255, 255, 0.51) inset, 0px 0px 0px 2px var(--color-gray-50)',
        },
      });
    }),
  ],
};
export default config;
