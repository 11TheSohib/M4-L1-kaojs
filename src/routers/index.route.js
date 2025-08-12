import Router from '@koa/router';
import cafeRouter from './cafe.route.js';
import foodRouter from './food.route.js';
import orderRouter from './order.route.js';

const router = new Router({ prefix: '/api' });

router
    .use(cafeRouter.routes())
    .use(cafeRouter.allowedMethods())

    .use(foodRouter.routes())
    .use(foodRouter.allowedMethods())

    .use(orderRouter.routes())
    .use(orderRouter.allowedMethods());

export default router;
