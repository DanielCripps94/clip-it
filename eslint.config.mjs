import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Apply to JS, JSX, TS, and TSX files
    languageOptions: {
      globals: globals.browser, // Use browser globals
    },
    // Combine multiple configurations
    rules: {
      // Add or modify rules as necessary
      "react/jsx-key": "error", // Ensure 'key' prop is provided in JSX iterators
      "react/prop-types": "off", // If you're using TypeScript, you might not need this rule
      "react/react-in-jsx-scope": "off", // With Next.js, React is automatically in scope
      "jsx-a11y/anchor-is-valid": "warn", // Accessibility rule for anchor tags
      // Add other rules here as necessary
    },
  },
  pluginJs.configs.recommended, // Use recommended settings for JS
  ...tseslint.configs.recommended, // Use recommended settings for TypeScript
  pluginReact.configs.flat.recommended, // Use recommended settings for React
];
