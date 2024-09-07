//import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // generate a standalone app
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-monorepo
  /*   webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  }, */
};

export default nextConfig;
