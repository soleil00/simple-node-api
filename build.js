const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error("Build failed with errors.");
    process.exit(1);
  }

  console.log("Build process completed.");
});
