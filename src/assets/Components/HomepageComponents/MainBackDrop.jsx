import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

import {Paper,Grid} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../../img/mainpage-back-drop.png';

const useStyles = makeStyles((theme) => ({
    mainBackDrop: {
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '800px',
        backgroundPosition: '50% 100%',
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        textAlign: 'center',

        minHeight: '85vh',
        minWidth:' 100%',

        position:'relative',

        display: 'flex',
        flexDirection: 'column'
      }
    },
    mainTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px',
            textAlign :'center',
            color:'white',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '100px',
            fontWeight: 'bold',
            paddingTop: '5%',
            position: 'relative',
            textAlign :'center',
        }
    },
    subHeader: {
        [theme.breakpoints.down('sm')]: {
            letterSpacing: '8px',
            fontSize: '25px',
            textAlign :'center',
            color:'white',
        },
        [theme.breakpoints.up('md')]: {
            letterSpacing: '8px',
            fontSize: '40px',
            paddingTop: '4px',
            textAlign :'center',
        }
    },
    explanation: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '16px',
            marginBottom:'16px',
            fontSize: '20px',
            textAlign :'center',
            color:'white',
            backgroundColor: '#2c2c2c98',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '8px',
            fontSize: '24px',
            textAlign:'center',
        }
    },
    signUpButton: {
        [theme.breakpoints.down('sm')]: {
            padding:' 2% 4%',
            margin: '5% 0',
            minWidth:'200px',
            minHeight:'50px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: 'rgba(253, 253, 253, 0.755)',
            left:'35%',
        },
        [theme.breakpoints.up('md')]: {
            padding:' 2% 4%',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: 'rgba(253, 253, 253, 0.755)',
            position: 'absolute',
            bottom:'64px',
            left:'44%',
        }
    }
  }));

export default function MainBackDrop() {
    const classes = useStyles();
    return (
        
            <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className = {classes.mainBackDrop}
            >
                <Grid item xs = {12}>
                    <div className={classes.mainTitle}>CAREERS UNCORKED</div>
                    <br/>
                    <div className={classes.subHeader}>ONE COMMUNITY, WHERE JOURNEYS CONVERGE</div>
                    <div className={classes.explanation}>SIGN UP TO OUR MAILING LIST TO RECEIVE A REMINDER FOR OUR
                    <br />
                    UPCOMING EVENTS
                    </div>
                </Grid>

                <Grid item xs = {12}>
                    <button className={classes.signUpButton}>Sign Up</button>
                </Grid>
            </Grid>
    )
}
