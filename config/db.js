const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/assessment-platform";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/assessment-platform", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;