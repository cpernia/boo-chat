import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute =  (props) => {
    return (
        <Route render={ () => (
            props.authenticated ? (
                <props.component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )
};

export default PrivateRoute;