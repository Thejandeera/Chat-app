import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
   try{
    const {message}= req.body;
    const{id:recieverId}= req.params;
    const senderID = req.user._id

    let conversation = await Conversation.findOne({
        participants:{$all:[senderID,recieverId]},
    })

    if(!conversation){
        conversation = await Conversation.creatr({
            participants:[senderID,recieverId],
        })
    }

    const newMessage = new Message({
        senderId,
        recieverId,
        message,
    })
    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
    res.status(201).json({newMessage});
   }catch(error){
    console.log("Error in sendMessage controller: ",error.message)
    res.status(500).json({error:"Internal Server error"});

   }
}