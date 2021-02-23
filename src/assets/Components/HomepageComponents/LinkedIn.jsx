import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import InImageLogo from '../../img/inImage.png'

import DeloitLogo from '../../img/deloitteLogo.png'
import EYLogo from '../../img/EYLogo.png'
import MnCLogo from '../../img/MnCLogo.png'
import MicrosoftLogo from '../../img/MicrosoftLogo.png'
import IBMLogo from '../../img/IBMLogo.png'
import AmazonLogo from '../../img/amazonLogo.png'


import backgroundImage from '../../img/lightBlueBackground.png';


const useStyles = makeStyles((theme) => ({
    linkedInPage: {
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            color:'white',
            textAlign:'center',
            maxWidth: '100%',
            minHeight: '85vh',
            minWidth: '100%',
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            color:'white',
            textAlign: 'left',
            maxWidth: '100%',
            minHeight: '85vh',
            minWidth: '100%',
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
        } 
        
    },
    inImageLogo:{
        marginTop: '10%',
    },
    mainTitle:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: 'normal',
            fontSize: '100px',
            paddingTop: '5%',
            position: 'relative',
        } 
        
    },
    subHeader:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            paddingTop: '0',
            letterSpacing: '8px',
            fontSize: '30px',
            paddingTop: '32px',
        } 
    },
    explanation:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '32px',
            fontSize: '26px',
            fontWeight: 'normal',
            fontSize: '25px',
        } 
        
    },
    viewButton:{
        [theme.breakpoints.down('sm')]: {
            padding:'10px 10px',
            width: '256px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'medium',
            backgroundColor: 'rgba(253, 253, 253)',
            marginTop: '32px',
            marginBottom: '32px',
        },
        [theme.breakpoints.up('md')]: {
            padding:'20px 40px',
            width: '256px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'large',
            backgroundColor: 'rgba(253, 253, 253)',
            marginTop: '32px',
        } 
        
    },
    subSectionHeader:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '15%',
            fontSize: '28px',
        } 
    },
    subSectionSubHeader:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        } 
    },
    subSectionExplanation:{
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
        } 
    },
}));

export default function LinkedIn() {
    const classes = useStyles();
    return (
        <div className = {classes.linkedInPage}>
        <Grid container direction="row" justify="center" alignItems="center">
           <Grid item xs={12} md={6}>
               <img className={classes.inImageLogo} src={InImageLogo} alt="linkedin"/>
               <div className={classes.subHeader}>JOIN OUR COMMUNITY</div>
               <div className={classes.mainTitle}>Careers Uncorked <br /> On LinkedIn</div>
               <div className={classes.explanation}><p>Follow our page on LinkedIn to connect 
                   with us and stay up to date with our resources.</p>
           
               </div>
               <button className={classes.viewButton}>Follow us on Linkedin</button>
           </Grid>
           <Grid item xs={12} md={5} alignItems="center" className='co-host-info'>
               <div className={classes.subSectionHeader}>WE'RE OFFERING FREE LINKEDIN PROFILE REVIEWS</div>
               <br/>
               <div className={classes.subSectionSubHeader}>TO HELP YOU GET CLOSER TO YOUR NEXT JOB!</div>
               <br/>
               <div className={classes.subSectionExplanation}>Our reviewers have received interviews from 
               <br/>
               companies including</div>
               <br/><br/><br/>


               
               <Grid container spacing={3} alignItems="center">
                   <Grid item xs={6} md={4}>
                       <img src={DeloitLogo} alt="sid"/> 
                   </Grid>
                   <Grid item xs={6} md={4}>
                       <img src={EYLogo} alt="sid"/> 
                   </Grid>
                   <Grid item xs={6} md={4}>
                       <img src={MnCLogo} alt="sid"/> 
                   </Grid>
                   <Grid item xs={6} md={4}>
                       <img src={MicrosoftLogo} alt="sid"/> 
                   </Grid>
                   <Grid item xs={6} md={4}>
                       <img src={IBMLogo} alt="sid"/> 
                   </Grid>
                   <Grid item xs={6} md={4}>
                       <img src={AmazonLogo} alt="sid"/> 
                   </Grid>
               </Grid>


           </Grid>
       </Grid>
       
   </div>
    )
}

