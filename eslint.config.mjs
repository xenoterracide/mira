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
    ...eslint.configs.recommended,
  },
  tseslint.configs.recommended,
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
  { files: ["**/*.json"], plugins: { json }, language: "json/json", ...json.configs.recommended },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", ...json.configs.recommended },
  {
    files: ["**/*.jsonc", "**/tsconfig.*.json"],
    plugins: { json },
    language: "json/jsonc",
    ...json.configs.recommended,
  },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", ...css.configs.recommended },
]);
