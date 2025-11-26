import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    plugins: {
      prettier: prettierPlugin,
    },

    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
