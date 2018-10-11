import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Login from "../containers/Login";
import Chat from './Chat';
import PrivateRoute from "./PrivateRoute";

class MainPage extends Component{
    render() {
        return (
            <div id="main-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'
                               render={(routerProps) => <Login {...routerProps} greeting={'Say Boooo to your friends'} /> }/>
                        <PrivateRoute exact path='/chat'
                               {...this.props}
                               component={Chat}
                               authenticated={this.props.username}
                               greeting={'Happy chatting'}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
};

export default connect(mapStateToProps, null)(MainPage);