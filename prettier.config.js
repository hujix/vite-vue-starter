export default {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "auto",
  arrowParens: "always",
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-css-order", "@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  tailwindConfig: "tailwind.config.ts"
};
