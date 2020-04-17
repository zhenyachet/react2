import React from 'react'

function PersonComment({comment}) {
    return (
        <div>
        <p align = 'left'>
        <em>{comment.author}</em>
        <br></br>
        <b> Comment:</b>
        {comment.text}
        <br></br>
        <b>Date:</b> {Date(comment.date)}
         </p>
        </div>
    )

}

export default PersonComment