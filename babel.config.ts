module.exports = function(api: any) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "react-native-stage-0"],

    plugins: ["babel-plugin-styled-components"]
  };
};
