import { Routes } from '@interfaces/routes.interface';
import IndexRoutes from '@routes/v1/index.routes';
import { Router } from 'express';

class V1Routes implements Routes {
    public path = '/v1';
    public router = Router();

    constructor() {
        this.initializeIndexRoutes();
    }

    initializeIndexRoutes() {
        const routes = new IndexRoutes();
        this.router.use(routes.path, routes.router);
    }
}

export default V1Routes;
