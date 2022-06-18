import React from "react";

function Comment({video}){
    
    function renderComments(){
        const comments = video.comments
        return comments.map(comment => {
            return(
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <span>{comment.comment}</span>
                </div>
            )
        })
    }
    return (
        <div>
            {renderComments()}
        </div>
    )
}

export default Comment