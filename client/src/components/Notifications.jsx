import React, { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { SocketContext } from '../SocketContext';
import { Call } from '@material-ui/icons';
import './Styles/VideoPlayer.css';

const Notifications = () => {

    const {answerCall, call, callAccepted} = useContext(SocketContext);
    return (
        <>
            {/* Notification for receiving call */}
            {call.isReceivingCall && !callAccepted && (
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography><h1>{call.name || 'Guest'} is calling: </h1></Typography>
                    <Button aria-label="PhoneRounded" variant="contained" onClick={answerCall}>
                    <Call/>Join 
                    </Button>
                </div>
            )}
        </>
    );
}

export default Notifications