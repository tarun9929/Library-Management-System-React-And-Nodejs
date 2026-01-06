import express from 'express';
import cors from 'cors';

const app = express();

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

app.get("/books", (req, res) => {
    const books = [
        {
            id: '1152424194',
            name: "Harry Potter and the Philosopher's Stone",
            auther: 'J.K. Rowling',
            price: 499,
            pages: 223,
            availability: 'In Stock'
        },
        {
            id: '1152424195',
            name: "The Hobbit",
            auther: 'J.R.R. Tolkien',
            price: 599,
            pages: 310,
            availability: 'In Stock'
        }
    ];
    res.status(200).json(books);
})

export default app;