import React, { useContext } from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';
import './Styles/VideoPlayer.css';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '350',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    margin: '10px',
    backgroundColor: '#485563',
    borderRadius: '30px'
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
                <Paper elevation={10} className = {classes.paper}>
                  <Grid item xs={12} md={6}>
                  
                    <video playsInline muted ref = {myVideo} autoPlay className={classes.video}/>
                    <h5>{name || 'Guest'}</h5>
                  </Grid>
                </Paper>
              )}
 
           {/* User's Video */}
           {
             callAccepted && !callEnded &&(
              <Paper elevation={10} className = {classes.paper}>
                <Grid item xs={12} md={6}>
                  
                    <video playsInline ref = {userVideo} autoPlay className={classes.video}  />
                    <h5>{name || 'Guest'}</h5>
                </Grid>
              </Paper>
             ) }
       </Grid>
    );
};

export default VideoPlayer;
