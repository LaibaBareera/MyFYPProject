import React, { useRef } from 'react';
import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io'
import SendIcon from '@mui/icons-material/Send';
import useChatActions from '../hooks/useChatActiona';
import { useChat } from '../context/ChatProvider';

const MessageForm = styled.form`
    padding: 0.5vw 0;
    display: flex;
    align-items: center;
    height: 10%;

    border-top: 1px solid rgba(0, 0, 0, 0.08);

    & input {
        flex: 1;
        height: 100%;
        width: 100%;
        border: none;
    }
`;

const ChatForm = () => {
    const inputRef = useRef(null);
    const { sendMessage } = useChatActions();
    const { currentRoom, userName } = useChat();

    const onSubmit = (e) => {
        e.preventDefault();

        sendMessage(
            inputRef.current.value,
            currentRoom.id,
            userName
        );

        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <MessageForm onSubmit={onSubmit}>
            <input type="text" placeholder='Type a message here' ref={inputRef} />

            <SendIcon flex="0" padding="0" active={true} size="2.2em" borderRadius="50%" onClick={onSubmit}>

                <IoIosSend fill='#fff' />
            </SendIcon>
        </MessageForm>
    );
};

export default ChatForm;