// SPDX-FileCopyrightText: Copyright © 2025 Caleb Cushing
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// @ts-expect-error: prettier-plugin-toml does not provide ESModule-compatible types or default export; imported as CommonJS
import * as toml from "prettier-plugin-toml";
// @ts-expect-error: prettier-plugin-sh does not provide ESModule-compatible types or default export; imported as CommonJS
import * as sh from "prettier-plugin-sh";

export default {
  printWidth: 120,
  plugins: [toml, sh],
};
