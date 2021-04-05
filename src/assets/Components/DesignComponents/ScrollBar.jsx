import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    vl: {
        borderLeft: '5px solid green',
        marginLeft: '15px',
        height: '500px',
        position:'fixed',
    }
  }));

export default function ScrollBar() {
    const classes = useStyles();
    return (
        <div className={classes.vl}>
        </div>
    )
}
