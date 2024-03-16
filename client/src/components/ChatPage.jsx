import React from 'react'
import back from '../images/bg_1.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { MessageBox } from "react-chat-elements";
import { Input } from 'react-chat-elements'
import { Button } from "react-chat-elements";
import { ChatList } from "react-chat-elements"
import ChatComponent from './ChatComponent';
function ChatPage() {
    return (
        <>
            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12  text-center mb-5">
                            <p className="breadcrumbs mb-0"><span className="mr-3"><Link to="/">Home <ArrowForwardIosIcon /></Link></span> <span>Chat</span></p>
                            <h1 className="mb-3 bread">Chat</h1>
                        </div>
                    </div>
                </div>
            </div>
           


            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pr-lg-4">
                           <ChatComponent/>
                           
                        </div>
                        

                    </div>
                </div>
              
            </section>
        
        </>
        

    )
}

export default ChatPage