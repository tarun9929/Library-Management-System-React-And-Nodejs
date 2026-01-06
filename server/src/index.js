import app from "./app.js";
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const whiteList = [];

app.use(cors({
    origin: (origin , callback) => {
        if(whiteList.indexOf(origin) !== -1) {
            callback(null , true);
        } else {
            callback(null , false);
        }
    },
    credentials: true,
    allowedHeaders: ['POST' , 'PATCH' , 'DELETE' , 'GET' , 'OPTIONS']
}))

app.listen(PORT , () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
})