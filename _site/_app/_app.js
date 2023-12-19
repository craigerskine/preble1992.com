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
        serif: ['Playfair Display', ...theme('fontFamily.serif')],
      }),
    },
  },
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance)', 'textWrap'],
  ],
});

injectGlobal`
  @layer base {
    [x-cloak] { @apply hidden; }
    h1,h2,h3,h4,h5,h6 { @apply font-serif font-bold; }
  }
`

import Alpine from 'alpinejs';
window.Alpine = Alpine;

Alpine.start();