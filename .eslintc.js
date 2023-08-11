module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    'react-hooks/exhaustive-deps': [0],
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
}
