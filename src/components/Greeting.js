import React from 'react';

const Greeting = ({ greeting }) => {
    return (
        <div id="greeting">
            <h1><span>{'{'}</span>{greeting}<span>}</span></h1>
        </div>
    )
};

export default Greeting;