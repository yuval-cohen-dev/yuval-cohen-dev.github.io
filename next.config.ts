// @ts-nocheck

import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants";
import type { NextConfig } from "next";
import JavaScriptObfuscator from "webpack-obfuscator";
import withPWA from "next-pwa"; // Import next-pwa plugin


const isDebuggerEnabled = process.env.DEBUGGER === "true";
const debuggerPort = process.env.DEBUGGER_PORT || "9229";
const debuggerHost = process.env.DEBUGGER_HOST || "localhost";

const withPwaConfig = withPWA({
  dest: "public", // Output directory for service worker and assets
});

const config = async (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig },
) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig: NextConfig = {
    reactStrictMode: true,
    compress: true,
    staticPageGenerationTimeout: 60,
    pageExtensions: ["ts", "tsx"],   
    webpack(config, context) {
      // camel-case style names from css modules
      config.module.rules
        .find(({ oneOf }) => !!oneOf)
        .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
        .reduce((acc, { use }) => acc.concat(use), [])
        .forEach(({ options }) => {
          if (options.modules) {
            options.modules.exportLocalsConvention = "camelCase";
          }
        });

      if (
        !context.isServer &&
        !context.dev &&
        config.optimization?.splitChunks
      ) {
        config.optimization.splitChunks.maxInitialRequests = 1;
      }

      return config;
    },
    eslint: {
      // ignoreDuringBuilds:true
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === "production",
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const devConfig: NextConfig = {
      ...nextConfig,
      webpack(config, context) {
        nextConfig.webpack(config, context);
        if (isDebuggerEnabled && context.dev) {
          // Modify Node.js process to start with debugging enabled
          // You can add more logic here if you want to handle other aspects of the debugger.
          config.node = {
            ...config.node,
            debug: true, // Enable debugging for Node.js
          };

          // Optionally, you can also configure how the dev server behaves if necessary
          config.devServer = {
            ...config.devServer,
            before(app) {
              // If the debugger is enabled, make sure it starts the server with debugging
              app.listen(debuggerPort, debuggerHost, () => {
                console.log(
                  `Debugger connected at ${debuggerHost}:${debuggerPort}`,
                );
              });
            },
          };
        }
        return config;
      },
    };
    return withPwaConfig(devConfig);
  }
  if (phase === PHASE_PRODUCTION_BUILD) {
    const prodConfig: NextConfig = {
      ...nextConfig,
      output: "export",
      skipTrailingSlashRedirect: true,
      trailingSlash: true,
      distDir: "dist",
      images: {
        unoptimized: true,
      }, 

      productionBrowserSourceMaps: false,
      webpack(config, context) {
        nextConfig.webpack(config, context);
        config.plugins.push(
          new JavaScriptObfuscator(
            {
              rotateStringArray: true,
            },
            [],
          ),
        );
        return config;
      },
    };
    return withPwaConfig(prodConfig);
  }
  return withPwaConfig(nextConfig);
  
};

export default config;
