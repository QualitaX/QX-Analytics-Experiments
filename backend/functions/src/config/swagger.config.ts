import path from 'path';

/**
 * Swagger all routers documentation options
 */
export const apiOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger example',
            version: '1.0.0',
            description: `This is an example`,
        },
    },
    apis: [path.join(__dirname, '../routes/**/*.js'), path.join(__dirname, '../schemas/**/*.js')],
};
