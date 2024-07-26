import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS = {
    MONGODB_CONN_STR : process.env.MONGODB_CONN_STR,
    PORT : process.env.PORT || 5000,
    JWT_SECRETE : process.env.JWT_SECRETE,
    NODE_ENV : process.env.NODE_ENV,
    TMDB_API_KEY : process.env.TMDB_API_KEY
}