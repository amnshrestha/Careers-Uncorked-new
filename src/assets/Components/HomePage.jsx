import React, { Component } from 'react'

import {Paper,Grid} from '@material-ui/core';
import MainBackDrop from './HomepageComponents/MainBackDrop';



import '../css/style.css';
import Hangouts from './HomepageComponents/Hangouts';
import Blogs from './HomepageComponents/Blogs';
import Podcast from './HomepageComponents/Podcast';
import LinkedIn from './HomepageComponents/LinkedIn';
import SignUp from './HomepageComponents/SignUp';
import About from './HomepageComponents/About';
import NavigationBar from './NavigationBar';


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}
                >
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <MainBackDrop/>
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <Hangouts/>
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <Blogs />
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <Podcast />
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <LinkedIn />
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <SignUp />
                        </Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className="homepage-card">
                            <About />
                        </Paper>
                    </Grid>

                </Grid>
               
               
                  
               
              
            </div>
        )
    }
}
