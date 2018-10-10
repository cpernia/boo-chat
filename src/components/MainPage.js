import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Login from "../containers/Login";
import Chat from './Chat';
import Rooms from './Rooms';

const MainPage = () => {
    return (
        <div id="main-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'
                           render={(routerProps) => <Login {...routerProps} greeting={'Say Boooo to your friends!'} /> }/>
                    <Route exact path='/rooms'
                           render={() => <Rooms greeting={'Rooms'} />} />
                    <Route exact path='/:roomName/chat'
                           render={() => <Chat greeting={'Happy chatting!'}/>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default MainPage;