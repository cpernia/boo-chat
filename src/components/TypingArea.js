import React, { Component } from 'react';

class TypingArea extends Component {

    constructor(){
        super();
        this.state = {
            facesUp: false,
            textArea: ''
        }
    }
    toogleFaces = () => {
        this.setState({ facesUp: !this.state.facesUp });
    };
    handleEmoji = (event) => {
        this.setState({ textArea: this.state.textArea + event.currentTarget.dataset.emoji });
        // console.log(event.currentTarget.dataset.emoji);
    };
    textAreaChange = (event) => {
        this.setState({ textArea: event.target.value });
    };
    render(){
        return (
            <div id="typing-wrapper">
                <div id="back-block">
                    <div id="who-is-typing">
                        <span>Valeria is typing...</span>
                    </div>
                    <div id="faces-wrapper" className={this.state.facesUp ? 'up':''}>
                        <ul>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😁">😁</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😍">😍</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😭">😭</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="🤗">🤗</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="🤓">🤓</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😱">😱</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😡">😡</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😘">😘</span></li>
                            <li><span aria-labelledby="jsx-a11/accessible-emoji" role="img" onClick={this.handleEmoji} data-emoji="😱">😱</span></li>
                        </ul>
                    </div>
                </div>
                <div id="sending-box">
                    <div>
                        <span id="face-svg-wrapper" onClick={this.toogleFaces}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 496 512" style={{ enableBackground: 'new 0 0 496 512'}} xmlSpace="preserve">
                                <path className={this.state.facesUp ? 'st0 st0-lighted':'st0'} d="M248,8C111,8,0,119,0,256s111,248,248,248s248-111,248-248S385,8,248,8z M328,176c17.7,0,32,14.3,32,32
                                    s-14.3,32-32,32s-32-14.3-32-32S310.3,176,328,176z M168,176c17.7,0,32,14.3,32,32s-14.3,32-32,32s-32-14.3-32-32S150.3,176,168,176
                                    z M362.8,346.2C334.3,380.4,292.5,400,248,400s-86.3-19.6-114.8-53.8c-13.6-16.3,11-36.7,24.6-20.5c22.4,26.9,55.2,42.2,90.2,42.2
                                    s67.8-15.4,90.2-42.2C351.6,309.5,376.3,329.9,362.8,346.2L362.8,346.2z"/>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <textarea style={{ resize: 'none' }}
                                  type="text"
                                  name="t-area"
                                  id="t-area"
                                  placeholder="Type something..."
                                  rows="1"
                                  value={this.state.textArea}
                                  onChange={this.textAreaChange}>
                        </textarea>
                    </div>
                    <div>
                        <span id="sent-icon" onClick={() => {
                                if(this.state.textArea !== ''){
                                    this.props.sentMessage(this.state.textArea);
                                    this.setState({ textArea: ''});
                                }
                            }
                        }>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve">
                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1.005285e-02" y1="256.0207" x2="511.9552" y2="256.0207">
                                <stop  offset="3.418698e-03" style={{stoColor:'#00A587'}}/>
                                <stop  offset="1" style={{stopColor:'#84C998'}}/>
                            </linearGradient>
                            <path className="st0" d="M476,3.2L12.5,270.6c-18.1,10.4-15.8,35.6,2.2,43.2L121,358.4l287.3-253.2c5.5-4.9,13.3,2.6,8.6,8.3L176,407
                                v80.5c0,23.6,28.5,32.9,42.5,15.8L282,426l124.6,52.2c14.2,6,30.4-2.9,33-18.2l72-432C515,7.8,493.3-6.8,476,3.2z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TypingArea;