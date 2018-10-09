import React from 'react';

import Greeting from './Greeting';

const Chat = ({ greeting }) => {
    return (
        <div>
            <Greeting greeting={greeting}/>
            <div id="chat-wrapper" className="chat area" style={{ backgroundColor: 'white' }}>
                <div id="header">
                    <h2>Venezuela</h2>
                </div>
                <div id="chat-area-typing-wrapper">
                    <div id="chat-area-wrapper">
                        <ul>
                            <li className="right">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </li>
                            <li className="left">
                                <span className="sender">Ana</span>
                                <span>Sure!</span>
                            </li>
                            <li className="right">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </li>
                            <li className="left">
                                <span className="sender">Ana</span>
                                <span>Sure!</span>
                            </li>
                            <li className="right">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </li>
                            <li className="left">
                                <span className="sender">Ana</span>
                                <span>Sure!</span>
                            </li>
                            <li className="right">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </li>
                            <li className="left">
                                <span className="sender">Ana</span>
                                <span>Sure!</span>
                            </li>
                        </ul>
                    </div>
                    <div id="typing-wrapper">
                        <div id="back-block">
                            <div id="who-is-typing">
                                <span>Valeria is typing...</span>
                            </div>
                            <div id="faces-wrapper" className="up">
                                <ul>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😁</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😍</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😭</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">🤗</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">🤓</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😱</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😡</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😘</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😱</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😡</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😘</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😡</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😘</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😱</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😡</span></li>
                                    <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img">😘</span></li>
                                </ul>
                            </div>
                        </div>
                        <div id="sending-box">
                            <div>
                            <span>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 496 512" style={{ enableBackground: 'new 0 0 496 512'}} xmlSpace="preserve">
                                    <path className="st0" d="M248,8C111,8,0,119,0,256s111,248,248,248s248-111,248-248S385,8,248,8z M328,176c17.7,0,32,14.3,32,32
                                        s-14.3,32-32,32s-32-14.3-32-32S310.3,176,328,176z M168,176c17.7,0,32,14.3,32,32s-14.3,32-32,32s-32-14.3-32-32S150.3,176,168,176
                                        z M362.8,346.2C334.3,380.4,292.5,400,248,400s-86.3-19.6-114.8-53.8c-13.6-16.3,11-36.7,24.6-20.5c22.4,26.9,55.2,42.2,90.2,42.2
                                        s67.8-15.4,90.2-42.2C351.6,309.5,376.3,329.9,362.8,346.2L362.8,346.2z"/>
                                </svg>
                            </span>
                            </div>
                            <div>
                                <textarea style={{ resize: 'none' }} type="text" name="t-area" id="t-area" placeholder="Type something..." rows="1"></textarea>
                            </div>
                            <div>
                            <span id="sent-icon">
                                <img src="assets/img/paper-plane-solid.svg" alt="" />
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;