import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 12,
      sourceType: 'module',
    },

    rules: {
      'no-console': 0,
      // 禁止使用 console（可选）
      //'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
  //js.configs.all,
  eslintPluginPrettierRecommended,
];
