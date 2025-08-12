import { BaseController } from './base.controller.js';

class CafeController extends BaseController {
    constructor() {
        super(`cafe`);
    }
}

export default new CafeController();
