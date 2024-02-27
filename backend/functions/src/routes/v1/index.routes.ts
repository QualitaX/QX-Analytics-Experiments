import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class IndexRoutes implements Routes {
    public path = '';
    public router = Router();
    public controller = new IndexController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        /**
         * @swagger
         * /:
         *   get:
         *     summary: root endpoint checker
         *     description: root enpoint checker
         *     responses:
         *       200:
         *         description: OK
         *         content:
         *           text/plain:
         *             schema:
         *               type: string
         *               example: OK
         */
        this.router.get('/', this.controller.index);
        /**
         * @swagger
         * /ping:
         *   get:
         *     summary: ping - pong
         *     description: ping - pong
         *     responses:
         *       200:
         *         description: pong
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 status:
         *                   type: integer
         *                   example: 200
         *                 message:
         *                   type: string
         *                   example: success
         *                 data:
         *                   type: string
         *                   example: pong
         */
        this.router.get('/ping', this.controller.ping);
    }
}

export default IndexRoutes;
