import React from 'react'

import EachStoryComponent from "./index.view"

const EachStoryObject = (props) => {
    var storyObject = {
        "title": props.title,
        "description": props.description,
        "videoURL": "https://www.youtube.com/embed/"+props.videoID,
        "videoID": props.videoID,
        "videoID2": props.videoID+"2",
        "videoID3": props.videoID+"3",
    }
    console.log(storyObject)
    return <EachStoryComponent 
            title = {storyObject.title}
            description = {storyObject.description}
            videoURL = {storyObject.videoURL}
            videoID={storyObject.videoID}
            videoID2={storyObject.videoID2}
            videoID3={storyObject.videoID3}/>
}

export default EachStoryObject;