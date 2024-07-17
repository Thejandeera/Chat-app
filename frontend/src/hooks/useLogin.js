import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/Auth.Context.jsx';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (userName, password) => {
        const success = handleInputErrors(userName, password);
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, password })
            });

            // Log the response status
            console.log(`Response Status: ${res.status}`);

            if (!res.ok) {
                throw new Error('Invalid username or password'); // Throw error for any non-200 status
            }

            const data = await res.json();

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            console.error('Login Error:', error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

function handleInputErrors(userName, password) {
    if (!userName || !password) {
        toast.error('Please fill all fields');
        return false;
    }
    return true;
}
