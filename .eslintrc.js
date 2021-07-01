module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "airbnb-typescript",
    "prettier",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "jsx-a11y",
  ],
  env: {
    jest: true,
  },
};
