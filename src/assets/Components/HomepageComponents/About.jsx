import React from 'react'
import { Grid } from '@material-ui/core'

import UncorkedLogo from '../../img/uncorkedLogo.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    aboutPage: {
        [theme.breakpoints.down('sm')]: {
            background: 'white',
            backgroundSize: 'cover',
            textAlign: 'left',
            maxWidth: '100%',
            color:'black',
            minWidth: '100%',
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            background: 'white',
            backgroundSize: 'cover',
            textAlign: 'left',
            maxWidth: '100%',
            color:'black',
            minHeight: '85vh',
            minWidth: '100%',
            position:'relative',
            display: 'flex',
            flexDirection: 'column',
        }
       
        
    },

    mainTitle:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
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
    uncorkedLogo:{
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        },
        [theme.breakpoints.up('md')]: {
            height: '85vh',
        }
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className = {classes.aboutPage}>
            
            <Grid  container direction="row" justify="center" alignItems="center">
                <Grid item  xs={12} md = {6}>
                    <img src={UncorkedLogo} alt="uncorkedLogo" className={classes.uncorkedLogo}/> 
                </Grid>
                <Grid item xs={12} md = {6}>
                    <div className={classes.mainTitle}>About </div>
                    <div className={classes.subHeader}>CAREERS UNCORKED</div>
                    <div className={classes.explanation}><p>Uncorked is new and it brings a refreshing approach.
                            It's a community and a network built on the foundation
                            of open stories and fostering relationships.</p>
                            <p>Everyone has a great story and we can learn from these
                            shared experiences. Because chances are you are
                            going through the same struggles and we are here for
                            you. To learn, grow and network! Build relationships,
                            uncork your potential and share your stories to helps
                            others.</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
