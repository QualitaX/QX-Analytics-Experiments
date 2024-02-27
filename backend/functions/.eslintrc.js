module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "@typescript-eslint/parser",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "indent": ["error", "tab"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "import/no-unresolved": 0,
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", ["parent", "sibling"], "index"],
        "pathGroups": [
          {
            pattern: "angular",
            group: "external",
            position: "before",
          },
        ],
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
