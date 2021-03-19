/**
 * ===== NOTE =====
 * If you want to update the rules in this file, you MUST also update them in the .editorconfig file
 * ================
 */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 140,
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
