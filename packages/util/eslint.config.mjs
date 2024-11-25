import baseConfig from '@linerra/config/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
