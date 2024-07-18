import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}

      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
