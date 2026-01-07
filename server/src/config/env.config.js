import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SECRET_ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;
export const SECRET_ACCESS_EXPIRATION = process.env.SECRET_ACCESS_EXPIRATION;
export const SECRET_REFRESH_TOKEN = process.env.SECRET_REFRESH_TOKEN;
export const SECRET_REFRESH_EXPIRATION = process.env.SECRET_REFRESH_EXPIRATION;