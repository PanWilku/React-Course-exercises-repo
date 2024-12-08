import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    // Apply recommended ESLint configurations
    ...pluginJs.configs.recommended,

    // Apply recommended React plugin configurations
    ...pluginReact.configs.flat.recommended,

    languageOptions: {
      globals: globals.browser, // Set global variables (e.g., `window`, `document`)
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },

    rules: {
      // Allow React 17+ JSX runtime without React in scope
      "react/react-in-jsx-scope": "off",

      // Customize additional React rules as needed
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
    },
  },
];
