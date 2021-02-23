import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import SidPicture from '../../img/sid.png'
import SharfuzPicture from '../../img/sharfuz.png'

import YoutubeWhiteLogo from '../../img/youtube-white-2.png'
import LinkedInWhiteLogo from '../../img/linkedin-white-2.png'
import FacebookWhiteLogo from '../../img/facebook-white-2.png'

import backgroundImage from '../../img/mainpage-hangout.png';




const useStyles = makeStyles((theme) => ({
    hangout: {
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        textAlign: 'left',
        maxWidth: '100%',
        color:'white',
        minHeight: '85vh',
        minWidth: '100%',
        position:'relative',
        display: 'flex',
        flexDirection: 'column',
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',

        minHeight: '85vh',
        minWidth:' 100%',

        position:'relative',

        display: 'flex',
        flexDirection: 'column'
      }
    },
    mainContent:{
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    mainTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px',
            color:'white',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '72px',
            fontWeight: 'bold',
            paddingTop: '5%',
            position: 'relative',
            color: 'white',
        }
    },
    subHeader: {
        [theme.breakpoints.down('sm')]: {
            letterSpacing: '8px',
            fontSize: '25px',
            color:'white',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            letterSpacing: '8px',
            fontSize: '40px',
            paddingTop: '4px',
            color: 'white',
        }
    },
    explanation: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '16px',
            marginBottom:'16px',
            padding:'0 10px',
            fontSize: '20px',
            color:'white',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '8px',
            fontSize: '24px',
            color: 'white',
        }
    },
    cohostPicture:{
        [theme.breakpoints.down('sm')]: {
            width: '120px',
            height: '120px',
        },
        [theme.breakpoints.up('md')]: {
            width: '312px',
            height: '312px',
        }
    },
    cohostInfoPlace:{
        [theme.breakpoints.down('sm')]: {
            textAlign:'center',
            marginBottom:'10px',
        },
        [theme.breakpoints.up('md')]: {
            textAlign:'center'
        } 
    },
    cohostDetails:{
        [theme.breakpoints.down('sm')]: {
            fontSize: 'large',
            color:'white',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 'x-large',
            color:'white',
        } 
    },
    viewButton:{
        [theme.breakpoints.down('sm')]: {
            padding:'20px 0',
            width: '180px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: 'rgb(253, 253, 253)',
            margin: '0 auto',
            fontSize:'18px',
        },
        [theme.breakpoints.up('md')]: {
            padding:'20px 0',
            width: '256px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: 'rgb(253, 253, 253)',
            marginTop: '32px',
        } 
    },
    imagesHere:{
        [theme.breakpoints.down('sm')]: {
            flexDirection:'row',
        }
    }
  }));

  
  export default function Hangouts() {
    const classes = useStyles();
    return (

        <div className = {classes.hangout}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        className = {classes.mainContent}
                        >
                        <Grid item md={12}>
                            <div className={classes.mainTitle}>Careers Uncorked Hangouts</div>
                            <div className={classes.subHeader}>Our Livestream</div>
                            <div className={classes.explanation}><p>Join our hangouts where we talk about their struggles, barriers and experiences individuals 
                                wentt hrough to achieve success. Everyone has a great story and we can learn from these shared experiences.
                                Because chances are you are going through the same struggles and we are here for you. </p>
                        
                            </div>
                            <Grid container direction="row" justify="flex-start"  >
                                <Grid item xs = {6} md={2}>
                                    <img src={LinkedInWhiteLogo} alt="linkedin"/> 
                                </Grid>
                                <Grid item xs = {6} md={2}>
                                    <img src={YoutubeWhiteLogo} alt="youtube" /> 
                                </Grid>
                                <Grid item xs = {12} md={2}>
                                    <img src={FacebookWhiteLogo} alt="facebook" /> 
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <button className={classes.viewButton}>View Livestream</button>
                        </Grid>
                    </Grid>
                    
                    
                </Grid>
                <Grid item xs={12} md={5} className={classes.cohostInfoPlace}>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.imagesHere}
                    >
                        <Grid item xs={5}>
                            <img src={SidPicture} alt="sid" className={classes.cohostPicture} />
                            <div className={classes.cohostDetails}>Sidhant Ahluwalia<br/>Co Host</div> 
                        </Grid>
                        <Grid item xs={5}>
                            <img src={SharfuzPicture} alt="sid" className={classes.cohostPicture}  /> 
                            <div className={classes.cohostDetails}>Sharfuz Sifat<br/>Co Host</div>
                        </Grid>
                    </Grid>
                    

                </Grid>
            </Grid>
                
        </div>
    )
  }
  
