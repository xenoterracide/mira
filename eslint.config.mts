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
