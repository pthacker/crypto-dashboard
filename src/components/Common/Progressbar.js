import React from 'react';
import {Backdrop,CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    backdrop: {
      zIndex: 100,
      color: '#fff',
    }
  });


const Progressbar =({show})=>{
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={show}>
            <CircularProgress/>
        </Backdrop>
    )
}

export default Progressbar
