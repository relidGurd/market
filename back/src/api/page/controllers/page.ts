/**
 * page controller
 */

import { factories } from '@strapi/strapi'
import category from '../../category/controllers/category';

export default factories.createCoreController('api::page.page', ({strapi}) => (
    {
             async findOne(ctx) {
 
        const sanitizedQueryParams = await this.sanitizeQuery(ctx);

        
        const {slug} = ctx.params

        console.log(ctx.params)

         const results = await strapi.db.query('api::page.page').findOne({
            where: { slug },
            populate: {
                categories: true,
                recommendations: {
                    populate: {
                        products: {
                            populate: {
                                image: true,
                                category: true
                            }
                        }
                    }
                },
                components: {
                    populate: true
                }
            },

         })


         const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
    },
    }
));
