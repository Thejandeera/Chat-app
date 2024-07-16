import React, { useState } from 'react';
import toast from 'react-hot-toast';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
        if (!success) return;
        
        setLoading(true);
        try {
            const res = await fetch("api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, gender })
            });
            

            const data = await res.json();

            if (res.ok) {
                toast.success("Signup successful");
                console.log(data);
                
            } else {
               
                toast.error(data.message || "Signup failed");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignUp;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill all fields');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }
    if (password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return false;
    }
    return true;
}