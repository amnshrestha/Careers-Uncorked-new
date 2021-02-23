import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import DanielPic from '../../img/Daniel.png'

import SpotifyPic from '../../img/spotify.png'
import Applepodcast from '../../img/applePodcast.png'

import backgroundImage from '../../img/podcastBackground.png';

const useStyles = makeStyles((theme) => ({
    podcast: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        textAlign: 'left',
        maxWidth: '100%',
        minHeight: '85vh',
        minWidth: '100%',
        position:'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    mainTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '72px',
            fontWeight: 'bold',
            paddingTop: '5%',
            position: 'relative',
        }
    },
    subHeader: {
        [theme.breakpoints.down('sm')]: {
            letterSpacing: '8px',
            fontSize: '25px',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            letterSpacing: '8px',
            fontSize: '30px',
            paddingTop: '32px',
        }
    },
    explanation: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '16px',
            marginBottom:'16px',
            fontSize: '20px',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '32px',
            fontSize: '26px',
        }
    },
    viewPodcast:{
        [theme.breakpoints.down('sm')]: {
            padding:'20px 0',
            width: '180px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: '0xf0f0f0',
            margin: '0 auto',
            fontSize:'18px',
        },
        [theme.breakpoints.up('md')]: {
            padding:'30px 0',
            width: '256px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            backgroundColor: '0xf0f0f0',
            marginTop: '32px',
        } 
       
    },
    picture:{
        [theme.breakpoints.down('sm')]: {
            width: '120px',
            height: '120px',
            borderRadius:'50%',
        },
        [theme.breakpoints.up('md')]: {
            width: '500px',
            height: '500px',
            borderRadius:'50%',
        }
    },
    personName:{
        [theme.breakpoints.down('sm')]: {
            fontSize: 'x-large',
            marginTop: '32px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 'x-large',
            marginTop: '32px',
            textAlign:'center',
            width:'500px',
        } 
    },
    personPosition:{
        [theme.breakpoints.down('sm')]: {
            fontSize: 'large',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 'large',
            width:'500px',
        }
    },
    cohostInfoPlace:{
        [theme.breakpoints.down('sm')]: {
            textAlign:'center',
            marginBottom:'10px',
            color:'white',
            
        },
        [theme.breakpoints.up('md')]: {
            textAlign:'center',
            alignItems:'center'
        } 
    },
    mainContent:{
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
        },
    },
    podcastbuttons:{
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
        },
    },
    podcastHostDetails:{
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#2c2c2c98',
        },
        
    }
}));

export default function Podcast() {
    const classes = useStyles();
    return (

        <div className = {classes.podcast}>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.blogGrid} spacing={10}>
            <Grid item md={7}>
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.mainContent}
                >
                    <Grid item md={12}>
                        <div className={classes.mainTitle}>International Perspective</div>
                        <div className={classes.subHeader}>Our Podcast</div>
                        <div className={classes.explanation}><p>A podcast where we discuss the success stories, experiences, and challenes of international students. If you are an internationla student looking to carve your own path or if you are somenoe inteerested in knowing what it is like to be an international student, this is the podcast for you!</p>
                        </div>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems='center' className={classes.podcastbuttons}>
                        <Grid item>
                            <img src={Applepodcast} alt="apple" /> 
                        </Grid>
                        <Grid item >
                            <img src={SpotifyPic} alt="spotify"/> 
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <button className={classes.viewPodcast}>View Podcasts</button>
                    </Grid>
                
                
                </Grid>

                
                
            </Grid>
            <Grid item xs={12} md={4} className={classes.cohostInfoPlace}>
                
                <Grid item xs={12} md={5}>
                    <img src={DanielPic} alt="Daniel" className={classes.picture} /> 
                    <div className={classes.podcastHostDetails}>
                        <div className={classes.personName}>Daniel Munoz</div> 
                        <div className={classes.personPosition}>Podcast Host</div>
                    </div>
                </Grid>
                
            </Grid>
        </Grid>
    </div>

        

      
    )
}

