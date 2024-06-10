import mongoose from "mongoose";


const mySchemaOfMessages = new mongoose.Schema(
    
{senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
message: {
    type: String,
    required: true
},
}, { timestamps: true });

const messageModel = mongoose.model("Message",mySchemaOfMessages);

export default messageModel;