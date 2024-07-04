import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    participamessagesnts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
        default:[],
    }],
},{timestamps:true});

const Conversation = mongoose.model("Conversation",conversationSchema);
export default Conversation;