import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import EachStoryComponent from "../EachStoryComponent";

//Remove this
import GetStoriesData from './index.data'

const useStyles = makeStyles((theme) => ({
    mainList:{
        position:'absolute',
        width:'100%',
        height:'100%',
    },
}));


const ListOfStories = () => { 
    const classes = useStyles(); 
    var test = GetStoriesData();
    console.log("Now" + test);

    const forEachStory = (listOfStories) => {
        return listOfStories.map(eachStory =>{
            return (
                <EachStoryComponent 
                    title = {eachStory.title}
                    description = {eachStory.description}
                    videoID = {eachStory.videoID}
                />
                    
                )
        })
    }

    return (
        <div className = {classes.mainList}>
            {forEachStory(test)}
        </div>
    )
}
export default ListOfStories;