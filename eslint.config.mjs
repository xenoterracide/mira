// SPDX-FileCopyrightText: Copyright © 2025 Caleb Cushing
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @ts-check
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".yarn/", ".pnp.*", "node_modules/", "dist/", "build/"]),
  {
    files: ["module/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    extends: [tseslint.configs.disableTypeChecked],
    ...eslint.configs.recommended,
  },
  tseslint.configs.strictTypeChecked,
  {
    files: ["module/**/*.{ts,mts,cts,tsx}"],
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
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: [tseslint.configs.disableTypeChecked],
    ...json.configs.recommended,
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: [tseslint.configs.disableTypeChecked],
    ...json.configs.recommended,
  },
  {
    files: ["**/*.jsonc", "**/tsconfig.*.json"],
    plugins: { json },
    language: "json/jsonc",
    extends: [tseslint.configs.disableTypeChecked],
    ...json.configs.recommended,
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended", tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: [tseslint.configs.disableTypeChecked],
    ...css.configs.recommended,
  },
]);
