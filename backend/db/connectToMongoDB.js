import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONNECTED TO MINGODB VIA MONGOOSE");
  } catch (error) {
    console.log("MONGO CONNECTION ERROR :", error);
  }
};

export default connectToMongoDB;
