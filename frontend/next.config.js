/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new (require("webpack").NoEmitOnErrorsPlugin)());
    }
    return config;
  },
};
module.exports = nextConfig;
