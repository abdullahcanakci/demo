module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    // we only want single quotes
    quotes: ["error", "single"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid useless spaces
    "no-multi-spaces": ["error"],
    // we want to have spaces inside {} and []
    "object-curly-spacing": ["warn", "always"],
    "jsx-a11y/no-static-element-interactions": ["ignore"],
  },
};
