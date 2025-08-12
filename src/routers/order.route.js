import Router from '@koa/router';
import controller from '../controllers/order.controller.js';

const orderRouter = new Router({ prefix: '/cafe' });

orderRouter
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete);

export default orderRouter;
