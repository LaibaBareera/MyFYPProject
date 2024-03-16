import React from 'react'
import styled from 'styled-components';
import { ChatProvider } from '../context/ChatProvider';
import Wrapper from './Wrapper';
export const Ext = () => {

    return (
        <>

            <ChatProvider>
                <Wrapper />
            </ChatProvider>
        </>
    )
}
