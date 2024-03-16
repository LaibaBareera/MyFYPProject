import React from 'react';
import { MessageList, Input ,Button} from 'react-chat-elements';

class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // Array to store the chat messages
      inputText: '', // Current input text
    };
  }

  handleInputTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleSendMessage = () => {
    const { inputText } = this.state;
    this.setState({ inputText: '' });
    // Create a new message object
    const newMessage = {
      position: 'right',
      type: 'text',
      title: 'Me',
      text: inputText,
      date: new Date(),
    };
    const newMessageAdmin = {
        position: 'left',
        type: 'text',
        title: 'Admin',
        text: "we are not available right now",
        date: new Date(),
      };

    // Update the messages array with the new message
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage,newMessageAdmin],
    
    }));
  };

  render() {
    const { messages, inputText } = this.state;

    return (
      <div>
        <MessageList className='message-list' dataSource={messages} />
        <Input
          placeholder='Type here...'
          defaultValue={inputText}
          onChange={this.handleInputTextChange}
          rightButtons={
            
            <Button text={"Send"} onClick={this.handleSendMessage} title="Send" />
          }
        />
      </div>
    );
  }
}

export default ChatComponent;
