import mongoose from "mongoose";

export const connectDB = async () => {
    const db = process.env.MONGO_URL;

    try {
        const { connection } = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Recommended for MongoDB
        });
        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};
