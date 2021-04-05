import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import test from '../../../img/storiesImages/test.jpg';
import $ from "jquery";




const useStyles = makeStyles((theme) => ({
    parent:{
        position:'relative',
    },

    mainContainer: {
        margin: '0 auto',
        width: '60%',
        height: '200px',
        marginBottom:'50px',
        backgroundColor: '#F79226',
        boxShadow: '5px 10px 10px #888888',
        borderTopLeftRadius: '10px',
        borderTopRightRadius:'10px',
        position:'relative',
    },
    overlay: {
        display: 'grid',
        gridTemplateColumns: '4fr 7fr',
        position: 'absolute',
        width:'100%',
        height:'100%',
        top: '0',
        left: '0',
        backgroundColor: '#F79226',
    },
    guestDetails:{
        display: 'none',
        gridTemplateColumns: '4fr 7fr',
        position: 'absolute',
        width:'100%',
        top: '0',
        left: '0',
    },
    imageAndLinks:{
        marginTop: '20%',
        marginLeft: '20%',
        textAlign: 'center',
        paddingBottom: '5px',
        borderRadius: '10%',
        zIndex:'100',
        "&:hover": {
            backgroundColor: '#F79226',
            boxShadow: '0px 10px 5px -5px #000000',
            zIndex:'2',
          },
        "&:hover $hiddenDetails": {
            display: 'block',
        },
        "&:hover $guestImage": {
            boxShadow: '0px 0px 0px #000000',
        }
    },
    guestImage:{
        width: '190px',
        height: '190px',
        borderRadius: '50%',
        border: '20px solid #F79226',
        boxShadow: '0px 10px 5px -5px #000000',
        zIndex:'10',
    },
    hiddenDetails:{
        display: 'none',
        width: '80%',
        margin: '0 auto',
    },
    guestDescription:{
        marginTop: '15%',
    },
    iFrame:{
        paddingTop:'10px',
        paddingLeft:'10px',
    },
    videoDescription:{
        marginTop:'5%',
    }
}));


const EachStoryComponent = (props) => { 
    const classes = useStyles(); 
    var videoID = "#"+props.videoID;
    var initialHeight = $(videoID).height();
    var initialWidth = $(videoID).width();
    // var initialDisplay = $(videoID).display();
    var videoID2 = "#"+props.videoID2;
    var videoID3 = "#"+props.videoID3;

    var videoURL = props.videoURL;


    const makeAnotherDivVisible = () => {
        // console.log("Hello fellows");
       
        $(videoID).animate({width:'0',height:'0'},300, function(){
            $(videoID).css({display:'none'});
            $(videoID2).css({display:'grid'});
            $(videoID3).html("<iframe loading=\"lazy\" width=\"300\" height=\"168\" src="+videoURL+"\ title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen /> ");
        });
    }

    const goBack = () => {
        var videoID = "#"+props.videoID;
        $(videoID).animate({width:initialWidth,height:initialHeight,display:'grid'},300, function(){
            $(videoID).css({display:'grid'});
            $(videoID2).css({display:'none'});
        });
    }
    return (
        <div className={classes.parent}>
        <div className={classes.mainContainer}>
            <div className={classes.overlay} id={props.videoID}> 
                <div className={classes.imageAndLinks}>
                    <img className = {classes.guestImage} src={test}  alt="trainer" />
                    <div className={classes.hiddenDetails}>
                        Lorem, ipsum dolor.<br />
                        Lorem, ipsum dolor.
                    </div>
                </div>
                <div className={classes.guestDescription}>
                    {props.title}
                    {/* How to Be a Product Manager? From PM's at Facebook and Microsoft | Careers Uncorked */}
                    <div className={classes.learnMoreButton}>
                        {/* <a href={props.videoURL}> */}
                            <button type="button" className="btn btn-info" onClick={makeAnotherDivVisible}>Learn More</button>
                        {/* </a> */}
                    </div>
                </div>
               
            </div>
            <div className={classes.guestDetails} id={props.videoID2}>
                <div id={props.videoID3}></div>
                <div className={classes.videoDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste illo ab? Eius distinctio ullam ipsum magni magnam aspernatur earum.
                    <button type="button" class="btn btn-info" onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>

        </div>
    )
}
export default EachStoryComponent;