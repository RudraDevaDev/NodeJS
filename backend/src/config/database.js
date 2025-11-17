import mongoose from "mongoose";

const connect_db = async () => {
    try {
        const connectionInstance  = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log("\n MongoDB connected !!!",
            connectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed",error);
        process.exit(1);
    }
}

export default connect_db;