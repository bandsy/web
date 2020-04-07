import { resolve } from "path";

export default (config, env, helpers) => {
  // Define a `process.env.SSR` boolean constant:
  const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0];
  DefinePlugin.plugin.definitions["process.env.SSR"] = String(env.ssr);

  // Use any `index` file, not just index.js
  config.resolve.alias["preact-cli-entrypoint"] = resolve(
    process.cwd(),
    "src",
    "index"
  );
};
