<!--
SPDX-FileCopyrightText: Copyright © 2024, 2025 Caleb Cushing

SPDX-License-Identifier: CC-BY-NC-4.0
-->

# README

## Python tooling (for commit hooks)

If you need to recreate the Python lock file for commit hooks locally, use pip-compile with PEP 621:

```sh
# Regenerate requirements.txt from PEP 621 dependencies in pyproject.toml
pip-compile -o requirements.txt pyproject.toml

# Then install and set up commit hooks
pip install -r requirements.txt && git config core.hooksPath .config/git/hooks
```

## Licenses

- Typescript and TSX Sources [AGPL-3.0-or-later](https://choosealicense.com/licenses/agpl-3.0/)
- Documentation: [CC-BY-NC-4.0](https://creativecommons.org/licenses/by-nc/4.0/)

Copyright © 2024 - 2025 Caleb Cushing
