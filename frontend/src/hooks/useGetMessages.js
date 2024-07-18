import React, { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    let intervalId;

    const getMessages = async () => {
      setLoading(true);
      try {
        if (!selectedConversation) {
          setMessages([]);
          setLoading(false);
          return;
        }

        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch messages');
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error(error.message);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation) {
      getMessages();
      intervalId = setInterval(getMessages, 5000); // Poll every 5 seconds
    } else {
      setMessages([]);
    }

    return () => clearInterval(intervalId);
  }, [selectedConversation, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
