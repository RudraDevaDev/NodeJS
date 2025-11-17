import dotenv from 'dotenv';
import connect_db from './config/database.js';
import app from './app.js';

dotenv.config({
    path: './.env'
});

const startServer = async () =>{
    try {
        console.log("MONGODB_URI:",process.env.MONGODB_URI);
        await connect_db();
        app.on("error",(error) =>{
            console.log("Error",error)
            throw error;
        });

        app.listen(process.env.PORT || 8000, () =>{
            console.log("Server is Running on port :",process.env.PORT);
        });
    } catch (error) {
        console.log("MongoDB connection Failed !!!", err);
    }
}

startServer();