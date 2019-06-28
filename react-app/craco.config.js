const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  // jest: {
  //   babel: {
  //     addPresets: true,
  //     addPlugins: true,
  //     configure: (jestConfig, { env, paths, resolve, rootDir }) => {
  //       jestConfig.transformIgnorePatterns = ["[/\\\\]node_modules[/\\\\](?!kbase-ui-lib|antd/).+\\.js$"];
  //       // jestConfig.transformIgnorePatterns = [
  //       //   "/node_modules/(?!antd|rc-pagination|rc-calendar|rc-tooltip|kbase-ui-lib)/.+\\.js$"
  //       // ];
  //       jestConfig.rootDir = "./src";

  //       return jestConfig;
  //     }
  //   }
  // },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "src/custom/antd/theme.less")
      }
    }
  ]
};
