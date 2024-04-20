import mongoose from "mongoose";


export const connectDB = async (req, res) => {

    const dbb = process.env.MONGO_URL;
    const db = "mongodb+srv://mery:WzHHYynduS8EAUNZ@cluster0.5o9lanh.mongodb.net/mery"

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}