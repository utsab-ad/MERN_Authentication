import mongoose from "mongoose"

export const connectDB = async()=>{
try {
    console.log("mongo_uri: ", process.env.MONGO_URI);
    const cnn= await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected : ${cnn.connection.host}`);
} catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1);
}
}