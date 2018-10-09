import React from 'react';

import Greeting from './Greeting';

const Login = ({ greeting }) => {
    return (
        <div>
            <Greeting greeting={greeting}/>
            <div id="chat-wrapper" className="logging">
                <div id="logging-wrapper">
                    <div id="boo-chat-title">
                        <span>Boo</span><span>Chat</span>
                    </div>
                    <div id="inputs-wrapper">
                        <form id="logging-form">
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" autoComplete="off"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" autoComplete="off"/>
                            </div>
                            <button id="submit-btn">Sign In/Up</button>
                            <p>If you are not registered yet, you automatically will by providing the info above</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;