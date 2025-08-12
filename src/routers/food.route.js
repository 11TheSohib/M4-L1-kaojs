import Router from '@koa/router';
import controller from '../controllers/food.controller.js';

const foodRouter = new Router({ prefix: '/food' });

foodRouter
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete);

export default foodRouter;
