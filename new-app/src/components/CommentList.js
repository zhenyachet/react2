import React from 'react'
import PersonComment from './PersonComment'
import SortingMyArray from './SortingMyArray'

function CommentList() {


    const comments = document.__comments
    const commentList = comments.map(comment => <PersonComment key={comment.id} comment={comment} />)
   return (
        <div>
       <br></br>
        <h4 align = 'left'>Commenteries:</h4>
        {commentList}

        <SortingMyArray />
        </div>)
}

export default CommentList