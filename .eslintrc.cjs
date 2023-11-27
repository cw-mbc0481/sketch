module.exports = {
  extends: ['./node_modules/@cw-frontend/fe-eslint/.eslintrc'],
  rules: {
    // tsdoc
    'tsdoc/syntax': 0,
    'react/react-in-jsx-scope': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown', 'type'],
        pathGroups: [
          {
            pattern: '{react*,axios}',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '{@/assets/*,@/constants/*,@/domains/*,@/hooks/*,@/router/*,@/stores/*,@/utils/*}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/components/*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '{@/types/*,@storybook/*}',
            group: 'type',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
