import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  {
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-debugger": "error",
      "prefer-const": "error",
      "arrow-parens": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];
