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
            gql: "./gql",
            hooks: "./hooks",
            interfaces: "./interfaces",
            pages: "./pages",
            schemas: "./schemas",
            types: "./types",
            utils: "./utils"
          },
          extensions: [".ts", ".tsx"]
        }
      ]
    ]
  };
};
