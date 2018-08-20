"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");
const funnel = require("broccoli-funnel");

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {});

  app.import("node_modules/typeface-oxygen/index.css");
  app.import("node_modules/typeface-oxygen-mono/index.css");

  let oxygen = funnel("node_modules/typeface-oxygen/files", {
    include: ["*.woff", "*.woff2"],
    destDir: "/assets/files/"
  });

  let oxygenMono = funnel("node_modules/typeface-oxygen-mono/files", {
    include: ["*.woff", "*.woff2"],
    destDir: "/assets/files/"
  });

  return app.toTree([oxygen, oxygenMono]);
};
