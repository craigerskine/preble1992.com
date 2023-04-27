import 'instant.page';

import 'iconify-icon';

import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

install({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  hash: false,
  theme: {
    extend: {
      colors: ({ theme }) => ({
        gray: theme('colors.stone'),
        pri: theme('colors.green'),
        sec: theme('colors.yellow'),
      }),
      fontFamily: ({ theme }) => ({
        serif: 'Roboto Slab,'+ theme('fontFamily.serif'),
      }),
    },
  },
  rules: [
    [ 'scroll-smooth', { 'scroll-behavior': 'smooth' } ],
  ],
});

injectGlobal`
  @layer base {
    [x-cloak] { @apply hidden; }
  }
`

import Alpine from 'alpinejs';
window.Alpine = Alpine;

Alpine.start();