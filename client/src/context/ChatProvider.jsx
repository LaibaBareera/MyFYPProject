import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io.connect(process.env.REACT_APP_SERVER || window.location.host);

const ChatContext = createContext();

export const useChat = () => {
    return useContext(ChatContext);
}

export const ChatProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const [currentRoom, setCurrentRoom] = useState(null);
    const callapi = async () => {
        try {
            const res = await fetch('/getuserdata', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await res.json();
            if (res.status === 426 || !data) {
                const error = new Error(res.error);
                throw error;
            }
            else if (res.status === 400) {
                alert("no Registration");
            }
            else {
                data.map((val, key) => {
                    setUserName(val.firstName);
                }
                )


                // console.log(data[0].title);
            }
        }
        catch (Err) {
            console.error(Err);
            navigate('/profile');
        }
    }

    useEffect(() => {
        callapi();
    }, []);

    const value = {
        socket,
        userName,
        setUserName,
        setCurrentRoom,
        currentRoom
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
};