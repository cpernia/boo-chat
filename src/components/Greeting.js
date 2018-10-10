import React from 'react';

const Greeting = ({ greeting, username }) => {
    return (
        <div id="greeting">
            <h1><span>{'{'}</span>{greeting}{username ? ' ' + username:''}!<span>}</span></h1>
        </div>
    )
};

export default Greeting;