import { Router } from "express";

const router = Router();

router.route("/books").get((req, res) => {
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
});

export default router;