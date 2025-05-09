import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export conts connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL MONGODB || "");
    }catch (err) {
        console.error(err);
        process.exit(1)
    }
}