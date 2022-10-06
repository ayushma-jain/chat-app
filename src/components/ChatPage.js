import React from 'react';
import Form from "react-bootstrap/Form";
import { FiSend } from 'react-icons/fi';
import Button from "react-bootstrap/Button";

const chatData = ['Hi', 'Hello', 'How are you?', 'Good! Thank you for asking'];
const ChatPage = () => {
    return (
        <div className='i-box p-rel'>
            <h3 className='text-success'>Chat Page </h3>
            <div className='message-box'>
                {chatData.map(row => (
                    <p className='text-bright alert-success'>{row}</p>
                ))}
            </div>
            <div className='chat-box col-12'>
                <div className='row'>
                    <Form.Control type="text" className='col-md-10'
                        placeholder="Type start.....">
                    </Form.Control>
                    <Button className='col-md-2 btn-success'><FiSend /></Button>
                </div>
            </div>
        </div>
    )
}
export default ChatPage;