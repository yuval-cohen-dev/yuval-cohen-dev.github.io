// @ts-nocheck

import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} from "next/constants";
import type { NextConfig } from "next";
import JavaScriptObfuscator from "webpack-obfuscator";
import withPWA from "next-pwa";
import { WEB_URL } from "@/lib/constants";

const BUILD_DIR = "dist";

const withPwaConfig = withPWA({ // nextjs recommend Serwist
  dest: `public`,
  sw: "/sw.js",
  register:true,
  disable: process.env.NODE_ENV === "development",
  register: true,
  fallbacks:{
    document: "/_offline",
    // image, 
    // audio,
    // video,
    // font
  },
  reloadOnOnline:true,
  buildExcludes:[],
  publicExcludes:['!noprecache/**/*']

});

const config = async (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig }
) => {
  /**
   * @type {import('next').NextConfig}
   */
  let phaseConfig: NextConfig = {};
  const nextConfig: NextConfig = {
    env: {
      NEXT_TELEMETRY_DISABLED: "1"
    },
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
      ignoreDuringBuilds: false
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === "production",
      styledComponents: true,
      styledJsx: {
        useLightningcss: true
      }
    },
    typescript: {
      ignoreBuildErrors: false
    }
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    phaseConfig = {
      webpack(config, context) {
        nextConfig.webpack(config, context);
        return config;
      }
    };
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    phaseConfig = {
      
      output: "export",
      skipTrailingSlashRedirect: true,
      trailingSlash: true,
      distDir: BUILD_DIR,
      images: {
        loader: "akamai",
        path: "",
      },
      assetPrefix: `/`,
      productionBrowserSourceMaps: false,
      webpack(config, context) {
        nextConfig.webpack(config, context);
        config.plugins.push(
          new JavaScriptObfuscator(
            {
              rotateStringArray: true
            },
            []
          )
        );
        return config;
      }
    };
  }

  const setupConfig: NextConfig = {
    ...nextConfig,
    ...phaseConfig
  };

  if (phase === PHASE_PRODUCTION_BUILD) {
    return withPwaConfig(setupConfig);
  }
  return setupConfig;
};

export default config;
