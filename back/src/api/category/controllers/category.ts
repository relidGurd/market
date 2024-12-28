/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({strapi}) => ({
       async findOne(ctx) {
 
        const sanitizedQueryParams = await this.sanitizeQuery(ctx);

        
        const {id} = ctx.params

        console.log(ctx.params)

         const results = await strapi.db.query('api::category.category').findOne({
            where: { slug: id },
            populate: true,
         })


         const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
    },
})
);
