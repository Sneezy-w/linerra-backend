import globals from 'globals';
import pluginJs from '@eslint/js';
//import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2022,
      sourceType: 'module',
    },

    rules: {
      'no-console': 'warn',
      // 禁止使用 console（可选）
      //'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
  //js.configs.all,
];
