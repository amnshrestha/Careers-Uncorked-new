import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import Michelle_pic from '../../img/Michelle_pic.png'

import backgroundImage from '../../img/purpleBackground.png';


const useStyles = makeStyles((theme) => ({
    blogs: {
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
    blogGrid:{
        paddingTop: '5%',
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
    explanation: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '16px',
            marginBottom:'16px',
            fontSize: '20px',
            textAlign :'center',
            color:'white',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '8px',
            fontSize: '24px',
            textAlign:'center',
        }
    },
    whiteline:{
        width: '100%',
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
    michelleName:{
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
    michellePosition:{
        [theme.breakpoints.down('sm')]: {
            fontSize: 'large'
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
        },
        [theme.breakpoints.up('md')]: {
            textAlign:'center',
            alignItems:'center'
        } 
    },
}));


export default function Blogs() {
    const classes = useStyles();
    return (
        <div className = {classes.blogs}>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.blogGrid} spacing={10}>
                <Grid item md={6}>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item md={12}>
                            <div className={classes.mainTitle}>Careers Uncorked Blogs</div>
                            <div className={classes.explanation}><p>FIND OUR INSIGNT ON THINGS FROM GETTING AN MBA TO MAKING 
                                THE MOST OF COLLEGE DURING A PANDEMIC</p>
                            </div>
                        </Grid>
                        <Grid item md={12}>
                            <hr className={classes.whiteline}/>
                            <button className={classes.viewButton}>View Blogs</button>
                        </Grid>
                    
                    
                    </Grid>

                    
                    
                </Grid>
                <Grid item xs={12} md={4} className={classes.cohostInfoPlace}>
                    
                    <Grid item xs={12} md={5}>
                        <img src={Michelle_pic} alt="Michelle" className={classes.picture} /> 
                        <div className={classes.michelleName}>Michelle Shue</div> 
                        <div className={classes.michellePosition}>Chief Writer</div>
                    </Grid>
                    
                </Grid>
            </Grid>
        </div>

        
    )
    
}

