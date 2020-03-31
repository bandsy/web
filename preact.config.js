import { resolve } from "path";

export default (config, env, helpers) => {
  const babelConfig = helpers.getLoadersByName(config, "babel-loader")[0].rule
    .options;
  babelConfig.plugins.push("styled-components");
  // Use any `index` file, not just index.js
  config.resolve.alias["preact-cli-entrypoint"] = resolve(
    process.cwd(),
    "src",
    "index"
  );
};
