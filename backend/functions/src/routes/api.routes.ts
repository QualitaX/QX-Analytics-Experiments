import { Routes } from '@interfaces/routes.interface';
import V1Routes from '@routes/v1';
import { Router } from 'express';

/**
 * @class V1Routes
 * @implements {Routes}
 */
class APIRoutes implements Routes {
    public path = '';
    public router = Router();

    constructor() {
        this.initializeV1Routes();
    }
    initializeV1Routes() {
        const route = new V1Routes();
        this.router.use(`${this.path}${route.path}`, route.router);
    }
}

export default APIRoutes;
