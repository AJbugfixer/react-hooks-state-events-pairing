import React, { useState } from "react";
import CommentsCard from "./CommentsCard";

function VideoInfo({video}){
    const [videoData, setVideoData] = useState(video)
    const [isVisibel, setIsVisible] = useState(true)

    function increaseLike(){
        const videoInfo = {...videoData}
        videoInfo.upvotes = videoInfo.upvotes +1
        console.log(videoInfo)
        setVideoData(videoInfo)
    }

    function decreaseLikes(){
        const videoInfo = {...videoData}
        videoInfo.upvotes = videoInfo.upvotes -1
        console.log(videoInfo)
        setVideoData(videoInfo)
    }

    function handleComments(){
        setIsVisible(!isVisibel)
    }

    return(
        <div>
        <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
        />
        <h1>{videoData.title}</h1>
        <span>{videoData.views}Views | Uploaded {videoData.createdAt}</span>
        <br></br>
        <button onClick={increaseLike}>{videoData.upvotes}👍</button>
        <button onClick={decreaseLikes}>{videoData.upvotes}👎</button>
        <br></br>
        <button onClick={handleComments}>{isVisibel ? "Hide Comments" : "Show Comments"}</button>
        {isVisibel ? <CommentsCard video={videoData}/>:""}
        </div>
    )
}

export default VideoInfo