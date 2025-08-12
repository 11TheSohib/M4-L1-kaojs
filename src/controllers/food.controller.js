import { BaseController } from './base.controller.js';

class FoodController extends BaseController {
    constructor() {
        super(`food`);
    }
}

export default new FoodController();
