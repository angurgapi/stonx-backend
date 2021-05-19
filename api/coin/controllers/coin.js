'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	create: async ctx => {
    const {
      symbol,
      amount,
      initPrice,
      username
  
    } = ctx.request.body;

    try {
        console.log(ctx.request.body)
        const order = await strapi.services.coin.create({
          user: ctx.state.user.id,
          symbol,
          amount,
          initPrice,
          username      
        });

        return order;
      }
      catch (err) {
        // Silent
      }
    } 
};


