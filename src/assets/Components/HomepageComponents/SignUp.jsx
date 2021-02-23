import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import MailPic from '../../img/MailImage.png'
import backgroundImage from '../../img/MailImage.png';


const useStyles = makeStyles((theme) => ({
    signUpPage: {
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
    viewButton:{
        [theme.breakpoints.down('sm')]: {
            padding:'10px 0',
            width: '100px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'medium',
            marginTop: '32px',
            backgroundColor:'#F2F2F2',
        },
        [theme.breakpoints.up('md')]: {
            padding:'20px 0',
            width: '256px',
            border:'0',
            borderRadius: '50px',
            fontSize: 'x-large',
            marginTop: '32px',
            backgroundColor:'#F2F2F2',
        }
        
    },
    mailImage:{
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        },
        [theme.breakpoints.up('md')]: {
            height: '85vh',
        }
        
    },
    mainTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
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
            fontSize: '20px',
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
            fontSize: '15px',
            textAlign:'center',
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '32px',
            fontSize: '50px',
        }
    },
    mainContent: {
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
            justify:'center'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '128px',
        }
    },
}));
export default function SignUp() {
    const classes = useStyles();
    return (
        <div className = {classes.signUpPage}>
            
        <Grid  container direction="row" justify="space-between" alignItems="center" className="blogGrid">
            <Grid item xs={4} md = {5}>
               <img src={MailPic} alt="mailImage" className={classes.mailImage} /> 
            </Grid>
            <Grid item xs={8} md = {7}>
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="flex-start"
                    className={classes.mainContent}
                    >
                    <Grid item md={12}>
                        <div className={classes.mainTitle}>SIGN UP </div>
                        <div className={classes.explanation}>TO OUR MAILING LIST</div>
                    </Grid>
                    <Grid item md={12}>
                        <button className={classes.viewButton}>Sign Up</button>
                    </Grid>
                </Grid>
            </Grid>
           
       </Grid>
   </div>
    )
}

