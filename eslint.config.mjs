import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    ignores: [".next/**", "out/**"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
