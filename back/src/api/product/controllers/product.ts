/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({strapi}) => (    {
             async findOne(ctx) {
 
        const sanitizedQueryParams = await this.sanitizeQuery(ctx);

        
        const {slug} = ctx.params

        console.log(ctx.params)

         const results = await strapi.db.query('api::product.product').findOne({
            where: { slug },
            populate: true,
         })


         const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
    },
    }));
