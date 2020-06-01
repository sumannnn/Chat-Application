import React from 'react';
import ReactEmoji from 'react-emoji';
import "./Message.css";

const Message = ({message, name}) => {
    let isSentByCurrentuser = false;
    const trimmedName = name.trim().toLowerCase();
    if(message.user === trimmedName) {
        isSentByCurrentuser = true;
    }

    return (
        isSentByCurrentuser
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
                </div>
                <p className="sentText pl-10">{message.user}</p>
            </div>
        )   
    );
};

export default Message;