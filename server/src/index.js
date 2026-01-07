import app from "./app.js";
import { PORT } from './config/env.config.js';
import mongodbConnect from "./db/mongodb/mongodb.connect.js";

mongodbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        })
    })
    .catch((err) => {
        console.log("Something went wrong !!! Cannot connect to database");
        console.log(err);
        process.exit(1);
    })
