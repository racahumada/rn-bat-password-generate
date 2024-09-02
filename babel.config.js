module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: "./src",
          extensions: [".ts", ".tsx", ".json"],
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            constants: "./src/constants",
            hooks: "./src/hooks",
            screens: "./src/screens",
            routes: "./src/routes",
            services: "./src/services",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
