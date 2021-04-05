import React, {useState,useEffect} from 'react'
import FetchService from '../../HelperFunctions/FetchService'

const GetStoriesData = () => {
    //set the state and property
    const [allData, setAlldata] = useState({});
    const [preparedData, setPreparedData] = useState([]);
    const [dataFound, setdataFound] = useState(false);
    const [dataPrepared, setDataPrepared] = useState(false);


    useEffect(() => {
         // !!!Important change this
        FetchService.GET("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLIy7-i_9rAyQ9teMuV1dJHWuVcsW5y39o&key=AIzaSyAoZmO1H4VfuTiGWxWC9m-qhHrU27AqOCs")
        .then((res) => {
            if(Object.keys(res).length > 0 && !dataFound){
                setAlldata(res.items);
                setdataFound(true);
            }
            return prepareData();
        })
    }, [allData])


   

    const prepareData = () =>{
        var mainArray = [];
        if(Object.keys(allData).length > 0){
            allData.map((eachVideo) => {
                var title = eachVideo.snippet.title;
                var description = eachVideo.snippet.description;
                var videoID = eachVideo.snippet.resourceId.videoId;
                var toAppend = {
                    "title":title,
                    "description":description,
                    "videoID":videoID,
                }
                mainArray.push(toAppend);
            });
            console.log(mainArray);
            setPreparedData(mainArray);
            setDataPrepared(true);
        }
    }

    return preparedData;
    // const creatingView = (mainArray) =>{

    // }
}



export default GetStoriesData;