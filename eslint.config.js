// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react/'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?!.+\\.(css|scss|sass)$)'],
            ['^.+\\.(css|scss|sass)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
