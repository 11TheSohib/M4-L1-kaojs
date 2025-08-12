import { BaseService } from '../services/base.service.js';

export class BaseController {
    /**
     * @param {string} baseModel - Jadval nomi
     */
    constructor(baseModel) {
        this.baseModel = new BaseService(baseModel);
    }

    create = async (ctx) => {
        try {
            if (
                !ctx.request.body ||
                Object.keys(ctx.request.body).length === 0
            ) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Request body is required',
                    success: false,
                };
                return;
            }

            const newData = await this.baseModel.create(ctx.request.body);

            ctx.status = 201;
            ctx.body = {
                success: true,
                data: newData,
            };
        } catch (error) {
            console.error('Controller create error:', error);
            ctx.status = 500;
            ctx.body = {
                error: error.message || 'Internal server error',
                success: false,
            };
        }
    };

    findAll = async (ctx) => {
        try {
            const datas = await this.baseModel.findAll();

            ctx.status = 200;
            ctx.body = {
                success: true,
                data: datas,
                count: datas.length,
            };
        } catch (error) {
            console.error('Controller findAll error:', error);
            ctx.status = 500;
            ctx.body = {
                error: error.message || 'Internal server error',
                success: false,
            };
        }
    };

    findById = async (ctx) => {
        try {
            const { id } = ctx.params;

            if (!id || isNaN(id)) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Valid ID is required',
                    success: false,
                };
                return;
            }

            const data = await this.baseModel.findById(id);

            if (!data) {
                ctx.status = 404;
                ctx.body = {
                    error: 'Data not found',
                    success: false,
                };
                return;
            }

            ctx.status = 200;
            ctx.body = {
                success: true,
                data: data,
            };
        } catch (error) {
            console.error('Controller findById error:', error);
            ctx.status = 500;
            ctx.body = {
                error: error.message || 'Internal server error',
                success: false,
            };
        }
    };

    update = async (ctx) => {
        try {
            const { id } = ctx.params;

            if (!id || isNaN(id)) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Valid ID is required',
                    success: false,
                };
                return;
            }

            if (
                !ctx.request.body ||
                Object.keys(ctx.request.body).length === 0
            ) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Request body is required',
                    success: false,
                };
                return;
            }

            const data = await this.baseModel.update(id, ctx.request.body);

            if (!data) {
                ctx.status = 404;
                ctx.body = {
                    error: 'Data not found',
                    success: false,
                };
                return;
            }

            ctx.status = 200;
            ctx.body = {
                success: true,
                data: data,
            };
        } catch (error) {
            console.error('Controller update error:', error);
            ctx.status = 500;
            ctx.body = {
                error: error.message || 'Internal server error',
                success: false,
            };
        }
    };

    delete = async (ctx) => {
        try {
            const { id } = ctx.params;

            if (!id || isNaN(id)) {
                ctx.status = 400;
                ctx.body = {
                    error: 'Valid ID is required',
                    success: false,
                };
                return;
            }

            const data = await this.baseModel.delete(id);

            if (!data) {
                ctx.status = 404;
                ctx.body = {
                    error: 'Data not found',
                    success: false,
                };
                return;
            }

            ctx.status = 200;
            ctx.body = {
                success: true,
                message: 'Data deleted successfully',
                data: data,
            };
        } catch (error) {
            console.error('Controller delete error:', error);
            ctx.status = 500;
            ctx.body = {
                error: error.message || 'Internal server error',
                success: false,
            };
        }
    };
}
