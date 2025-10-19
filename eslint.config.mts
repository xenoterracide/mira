// SPDX-FileCopyrightText: Copyright © 2025 Caleb Cushing
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @ts-check
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".yarn/", ".pnp.*", "dist/", "build/"]),
  {
    files: ["module/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    ...eslint.configs.recommended,
  },
  {
    files: ["module/**/*.{ts,mts,cts,tsx}"],
    extends: [tseslint.configs.strictTypeChecked],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["module/**/*.{ts,mts,cts,tsx}"],
    extends: [tseslint.configs.stylisticTypeChecked],
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
  markdown.configs.recommended,
  {
    files: ["**/*.css"],
    language: "css/css"
    extends: [css.configs.recommended],
  },
]);
