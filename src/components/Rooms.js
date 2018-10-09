import React from 'react';

import roomImg from '../assets/img/roomImg.png'

import Greeting from './Greeting';

const Rooms = ({ greeting }) => {
    return (
        <div>
            <Greeting greeting={greeting}/>
            <div id="chat-wrapper" className="chat" style={{ backgroundColor: 'white' }}>
                <div id="header">
                    <h2>Rooms</h2>
                </div>
                <ul id="room-list">
                    <li>
                        <img src={roomImg} alt="booChat" />
                            <span>Venezuela</span>
                    </li>
                    <li>
                        <img src={roomImg} alt="booChat" />
                            <span>Chile</span>
                    </li>
                    <li>
                        <img src={roomImg} alt="booChat" />
                            <span>USA</span>
                    </li>
                    <li>
                        <img src={roomImg} alt="booChat" />
                            <span>Argentina</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Rooms;