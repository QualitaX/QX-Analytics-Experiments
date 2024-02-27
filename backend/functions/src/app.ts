import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
// import helmet from 'helmet';
import { APP_PORT, CREDENTIALS, LOG_FORMAT, MODE, ORIGIN, SECRET_KEY } from '@config/env.config';
import { logger } from '@config/firebase.config';
import { apiOptions } from '@config/swagger.config';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { ErrorResponse } from '@schemas/response.schema';
import session from 'express-session';
import hpp from 'hpp';
import morgan from 'morgan';
import passport from 'passport';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
    public isOpen: boolean;

    constructor(routes: Routes[], isOpen: boolean = false) {
        this.app = express();
        this.env = MODE || 'development';
        this.port = APP_PORT || 3000;
        this.isOpen = isOpen;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(morgan(LOG_FORMAT));
        this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
        this.app.use(hpp({ checkBody: false }));
        // todo: integrate helmet for security reason
        // this.app.use(helmet());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('lib'));
        this.app.use(cookieParser());
        this.app.use(
            session({
                cookie: {
                    secure: true,
                    maxAge: 60000,
                },
                secret: SECRET_KEY,
                resave: false,
                saveUninitialized: false,
            }),
        );
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    private initializeSwagger() {
        if (!this.isOpen) {
            // all api docs and spec
            const allSpec = swaggerJSDoc(apiOptions);
            this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(allSpec));
        }
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
        this.app.use('*', (_req, _resp, next) => {
            _resp.status(404).send(new ErrorResponse(404, 'Not Found'));
        });
    }
}

export default App;
