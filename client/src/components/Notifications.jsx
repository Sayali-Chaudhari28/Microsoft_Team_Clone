import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { SocketContext } from '../SocketContext';
import { Call } from '@material-ui/icons';

const Notifications = () => {

    const {answerCall, call, callAccepted} = useContext(SocketContext);
    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <h1>{call.name} is calling: </h1>
                    <IconButton aria-label="PhoneRounded" variant="contained" color="primary" onClick={answerCall}>
                       Join  <Call color="green"/>
                    </IconButton>
                </div>
            )}
        </>
    );
}

export default Notifications