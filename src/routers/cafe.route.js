import Router from '@koa/router';
import controller from '../controllers/cafe.controller.js';

const cafeRouter = new Router({ prefix: '/cafe' });

cafeRouter
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete);

export default cafeRouter;
