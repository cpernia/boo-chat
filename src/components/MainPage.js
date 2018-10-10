import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Login from "../containers/Login";
import Chat from './Chat';

const MainPage = () => {
    return (
        <div id="main-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'
                           render={(routerProps) => <Login {...routerProps} greeting={'Say Boooo to your friends'} /> }/>
                    <Route exact path='/chat'
                           render={() => <Chat greeting={'Happy chatting'}/>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default MainPage;