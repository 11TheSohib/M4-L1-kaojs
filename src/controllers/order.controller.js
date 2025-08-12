import { BaseController } from './base.controller.js';

class OrderController extends BaseController {
    constructor() {
        super(`order`);
    }
}

export default new OrderController();
