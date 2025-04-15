import { defineConfig } from "eslint/config";
import typescript from "@typescript-eslint/eslint-plugin";
import vue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: ["node_modules/", "dist/", "coverage/"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      vue,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/quotes": ["error", "double"],

      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": ["error", { html: { void: "always" } }],
      "vue/max-attributes-per-line": [
        "warn",
        { singleline: 3, multiline: { max: 1, allowFirstLine: false } },
      ],

      "prettier/prettier": "error",
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", prettier],
  },
]);