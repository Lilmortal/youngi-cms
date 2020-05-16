"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async fetch(params, name) {
    return strapi
      .query("Portfolio-image-description")
      .findOne({ name: params.name });
  },
};
