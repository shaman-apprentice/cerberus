module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
