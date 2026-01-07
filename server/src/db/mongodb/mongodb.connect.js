import mongoose from "mongoose";
import { MONGODB_URI } from "../../config/env.config.js";
import { DB_NAME } from "../../constents.js";

export default async function mongodbConnect() {
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED AT HOST !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        throw error;
    }
}