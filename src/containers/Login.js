import React, { Component } from 'react';
import { connect } from 'react-redux';

import Greeting from '../components/Greeting';
import { setUser } from '../actions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    onSubmit = () => {
        this.props.setUser(this.state.username);
    };

    render(){
        return (
            <div>
                <Greeting greeting={this.props.greeting} />
                <div id="chat-wrapper" className="logging">
                    <div id="logging-wrapper">
                        <div id="boo-chat-title">
                            <span>Boo</span><span>Chat</span>
                        </div>
                        <div id="inputs-wrapper">
                            <form id="logging-form">
                                <div className="input-wrapper">
                                    <label htmlFor="username">Username</label>
                                    <input type="text"
                                           id="username"
                                           name="username"
                                           autoComplete="off"
                                           value={this.state.username}
                                           onChange={this.handleUsernameChange}
                                    />
                                </div>
                                {/*<div className="input-wrapper">*/}
                                    {/*<label htmlFor="password">Password</label>*/}
                                    {/*<input type="password" id="password" name="password" autoComplete="off"/>*/}
                                {/*</div>*/}
                                <button type="button" id="submit-btn" onClick={this.onSubmit}>Sign In/Up</button>
                                <p>If you are not registered yet, you automatically will by providing the info above</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { setUser })(Login);