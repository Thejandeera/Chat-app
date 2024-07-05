import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        console.log("Message:", message);
        console.log("Receiver ID:", receiverId);
        console.log("Sender ID:", senderId);

        // Check if both sender and receiver exist
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!sender) {
            console.log("Sender not found");
            return res.status(404).json({ error: "Sender not found" });
        }

        if (!receiver) {
            console.log("Receiver not found");
            return res.status(404).json({ error: "Receiver not found" });
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            console.log("Creating new conversation");
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        } else {
            console.log("Existing conversation found:");
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            console.log("Saving new message");
            conversation.messages.push(newMessage._id);
            await conversation.save();
            await newMessage.save();
            console.log("Message saved successfully");
        }
        //SOCKET IO functionality will go here

        // await conversation.save();
        // await newMessage.save();

        //this will run in pararale
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json({ newMessage });
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};

export const getMessages = async (req,res)=>{
    try{

        const {id:userToChatId}= req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");

        if(!conversation) return req.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    }catch(error){
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
}
