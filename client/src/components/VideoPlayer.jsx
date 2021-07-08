import React, { useContext } from 'react'
import {Grid, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Context } from 'react';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));
  
  

const VideoPlayer = () => {
     const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    const classes = useStyles();

    return (
       <Grid container className={classes.gridContainer}>
           {/* Own Video */}
           {
              stream &&(
                <Paper className = {classes.paper}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || 'Guest'}</Typography>
                    <video playsInline muted ref = {myVideo} autoPlay className={classes.Video}  />
                  </Grid>
                </Paper>
              )}
 
           {/* User's Video */}
           <Paper className = {classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{call.name || 'Guest'}</Typography>
                    <video playsInline ref = {userVideo} autoPlay className={classes.Video}  />

                </Grid>

            </Paper>
       </Grid>
    )
}

export default VideoPlayer
