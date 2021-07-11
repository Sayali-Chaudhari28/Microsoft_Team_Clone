import React from 'react';
import {AppBar, Typography} from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#485563', 
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },


      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
              <img src="https://img.icons8.com/fluent/48/000000/microsoft-teams-2019.png"/>
                <Typography><h5> Teams </h5> </Typography>
            </AppBar>
            {/* Video Player */}
            <VideoPlayer />
            <Options>
              <Notifications />
            </Options>
           
        </div>
    );
};

export default App;
