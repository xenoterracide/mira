// SPDX-FileCopyrightText: Copyright © 2025 Caleb Cushing
//
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-License-Identifier: CC0-1.0

// @ts-ignore esModuleInterop
import * as toml from "prettier-plugin-toml";
// @ts-ignore esModuleInterop
import * as sh from "prettier-plugin-sh";

export default {
  printWidth: 120,
  plugins: [toml, sh],
};
