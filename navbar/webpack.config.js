const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");


module.exports = (env) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "it-labs",
    projectName: "navbar",
    env,
  });

  return webpackMerge.smart(defaultConfig, { 
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }],
        },
      ],
    }, 
  });
};
