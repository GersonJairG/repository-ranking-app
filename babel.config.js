module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true
        }
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            assets: "./assets",
            components: "./components",
            data: "./data",
            interfaces: "./interfaces",
            lib: "./lib",
            pages: "./pages",
            schemas: "./schemas"
          },
          extensions: [".ts", ".tsx"]
        }
      ]
    ]
  };
};
