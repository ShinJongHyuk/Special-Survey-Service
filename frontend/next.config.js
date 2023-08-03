/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
module.exports = nextConfig;
