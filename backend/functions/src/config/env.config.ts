export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const LOG_FORMAT = process.env.MODE === 'development' ? 'dev' : 'combine';
export const SECRET_KEY = process.env.SECRET_KEY ?? 'my-secret-key';
export const { MODE, APP_HOST, APP_PORT, ORIGIN, SPEC_PATH } = process.env;
