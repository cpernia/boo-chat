import React, { Component } from 'react';
import { connect } from 'react-redux';

import Greeting from './Greeting';
import TypingArea from './TypingArea';

import { sentMsg, activateChannel } from '../actions';

class Chat extends Component {
    constructor(){
        super();
        this.state = {

        };
    }
    componentDidMount(){
        console.log('did mount');
        this.props.activateChannel();
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };
    sentMessage = (msg) => {
        this.props.sentMsg(this.props.username, msg);
        this.scrollToBottom();
    };
    renderMsgs = () => {
        console.log('renderMsgs');
        return this.props.msgs.map((msg, i) => {
            if(msg.sender !== this.props.username){
                return (
                    <li className="left" key={i}>
                        <span className="sender">{msg.sender}</span><br/>
                        <span>{msg.msg}</span>
                    </li>
                )
            }
            return (
                <li className="right" key={i}>
                    <span>{msg.msg}</span><br/>
                </li>
            )
        });
    };
    render(){
        console.log('Chat Render');
        return (
            <div style={{ overflow: 'hidden'}}>
                <Greeting greeting={this.props.greeting} username={this.props.username} />
                <div id="chat-wrapper" className="chat area" style={{ backgroundColor: 'white' }}>
                    <div id="header">
                        <h2>Welcome</h2>
                    </div>
                    <div id="chat-area-typing-wrapper">
                        <div id="chat-area-wrapper">
                            <div style={{ height: '100%', overflowY: 'auto' }}>
                                <ul>
                                    <li className="right">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br/>
                                    </li>
                                    <li className="left">
                                        <span className="sender">Ana</span><br/>
                                        <span>Sure!</span>
                                    </li>
                                    {this.props.msgs ? this.renderMsgs():''}
                                </ul>
                                <div ref={(el) => { this.messagesEnd = el; }}></div>
                            </div>
                            {/*<div id="divider" style={{ height: '110px' }}></div>*/}
                        </div>
                        <TypingArea sentMessage={this.sentMessage}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
        msgs: state.chatReducer.msgs
    }
};

export default connect(mapStateToProps, { sentMsg, activateChannel })(Chat);