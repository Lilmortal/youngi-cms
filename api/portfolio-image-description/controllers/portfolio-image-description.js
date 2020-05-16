"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: async (ctx) => {
    return await strapi.services["portfolio-image-description"].fetch(
      ctx.params
    );
  },
};
