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
        sans: ['Roboto Slab', ...theme('fontFamily.sans')],
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
    h1,h2,h3,h4,h5,h6 { @apply font-black; }
    .hover-gallery {
      --items: 1;
      @apply w-full gap-px overflow-hidden [grid-template-columns:repeat(var(--items),1fr)];
      &,&:is(figure) { @apply inline-grid; }
      &:has(> :nth-child(3)) { --items: 2; }
      &:has(> :nth-child(4)) { --items: 3; }
      &:has(> :nth-child(5)) { --items: 4; }
      &:has(> :nth-child(6)) { --items: 5; }
      &:has(> :nth-child(7)) { --items: 6; }
      &:has(> :nth-child(8)) { --items: 7; }
      &:has(> :nth-child(9)) { --items: 8; }
      &:has(> :nth-child(10)) { --items: 9; }
      & > * {
        @apply w-full h-full object-cover opacity-0;
        grid-row: 1;
        &:nth-child(1) { grid-column: 1 / -1; opacity: 1; }
        &:nth-child(2) { grid-column: 1; }
        &:nth-child(3) { grid-column: 2; }
        &:nth-child(4) { grid-column: 3; }
        &:nth-child(5) { grid-column: 4; }
        &:nth-child(6) { grid-column: 5; }
        &:nth-child(7) { grid-column: 6; }
        &:nth-child(8) { grid-column: 7; }
        &:nth-child(9) { grid-column: 8; }
        &:nth-child(10) { grid-column: 9; }
        &:nth-child(n + 11) { display: none; }
      }
      & > *:hover { grid-column: 1 / -1; opacity: 1; }
      &:has(*:hover) { & > :nth-child(1) { @apply hidden; } }
    }
  }
`

import Alpine from 'alpinejs';
window.Alpine = Alpine;

Alpine.start();
