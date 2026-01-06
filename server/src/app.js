import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import booksRoutes from './routes/books.routes.js';

const app = express();

// Cors Configuration
const whiteList = ['https://musical-space-chainsaw-745gggp9rvrhrqg7-5173.app.github.dev'];

app.use(cors({
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    credentials: true,
    allowedHeaders: ['POST', 'PATCH', 'DELETE', 'GET', 'OPTIONS']
}))

// Express Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Routes
app.use('/api/v1', booksRoutes);

export default app;