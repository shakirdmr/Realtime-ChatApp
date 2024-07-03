import ConversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";

export const sendMessage = async (req, res)=>{

    const {id: reciever} = req.params;
    const message = req.body.message;
    const sender = req.user._id;


    try {
            const isConverstaionMade  = await ConversationModel.findOne({
                participants:{
                    $all: [sender, reciever]
                }
            });

            
            

            if(!isConverstaionMade)
                {
                    isConverstaionMade = await ConversationModel.create({
                        participants: [sender, reciever]
                    });
                }

            let newMessageObj = new messageModel({
                senderId: sender,
                receiverId: reciever,
                message: message

            });   


            await newMessageObj.save();  // Save the message to the database

           
            if(newMessageObj)
                {

                    isConverstaionMade.messages.push(newMessageObj._id);
                     await isConverstaionMade.save();  // Save the updated conversation
                }

            res.status(200).json({result:true, message:newMessageObj});

    } catch (error) {
        res.status(200).json({result:false, message:"ERROR IS "+error});
        
    }  


   }

export const getMessages = async (req, res)=>{


    try {
            const {id : userToChatWith_ID} = req.params;
            const sender_ID_my_ID = req.user._id;


            const conversations = await ConversationModel.findOne({
                participants:{ $all: [sender_ID_my_ID, userToChatWith_ID]}
            }).populate("messages");

            console.log(conversations.messages)

    res.status(200).json({result:true, message:conversations.messages});


} catch (error) {
    res.status(400).json({result:false, message:"Error is "+error});
        
}






}   