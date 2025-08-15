import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    // Suppress Prettier dynamic dependency warning
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /prettier[\/\\]standalone/,
        (data) => {
          delete data.dependencies[0].critical;
          return data;
        }
      )
    );

    if (isServer) {
      config.ignoreWarnings = [
        { module: /opentelemetry/ },
        { module: /prettier/ }, 
      ];
    }

    return config;
  },
};

export default withPayload(nextConfig);
