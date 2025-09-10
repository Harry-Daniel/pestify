module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // other plugins if you add them later
      "react-native-reanimated/plugin", // 👈 must be last
    ],
  };
};
