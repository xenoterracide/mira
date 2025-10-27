// SPDX-FileCopyrightText: Copyright © 2025 Caleb Cushing
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import cssPluginImport from "@eslint/css";
import jsonPluginImport from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";

const cssPlugin = (cssPluginImport as any)?.default ?? cssPluginImport;
const jsonPlugin = (jsonPluginImport as any)?.default ?? jsonPluginImport;

export default defineConfig([
  globalIgnores([".yarn/", ".pnp.*", "dist/", "build/"]),
  {
    files: ["module/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],
    languageOptions: { globals: globals.browser },
    ...eslint.configs.recommended,
  },
  {
    files: ["module/**/*.{ts,mts,cts,tsx}"],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      "max-params": "off",
      "@typescript-eslint/max-params": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "init-declarations": "off",
      "@typescript-eslint/init-declarations": "error",
      "prefer-destructuring": "off",
      "@typescript-eslint/prefer-destructuring": "error",

      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/no-dupe-class-members": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-invalid-this": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-redeclare": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },
  {
    files: ["module/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
        jsxRuntime: "automatic",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.json"],
    ignores: ["**/tsconfig.json", "**/tsconfig.*.json"],
    plugins: { json: jsonPlugin },
    language: "json/json",
    ...jsonPlugin.configs.recommended,
  },
  {
    files: ["**/*.json5"],
    plugins: { json: jsonPlugin },
    language: "json/json5",
    ...jsonPlugin.configs.recommended,
  },
  {
    files: ["**/*.jsonc", "**/tsconfig.json", "**/tsconfig.*.json"],
    plugins: { json: jsonPlugin },
    language: "json/jsonc",
    ...jsonPlugin.configs.recommended,
  },
  {
    files: ["**/*.css"],
    plugins: { css: cssPlugin },
    language: "css/css",
    extends: [cssPlugin.configs.recommended],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: [markdown.configs.recommended],
  },
]);
