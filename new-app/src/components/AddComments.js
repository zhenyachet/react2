import React from 'react'



function AddComments(props) {
    console.log(props.addcomments)
    return (
        <div>
    {props.addcomments.map((row,id) =>  (

                <li key= {row.id}><em>{row.author}</em>
               <br></br>
               <b>Comment:  </b>
               {row.text}
                <br></br>
                    <b>Date:  </b>
                    {Date(row.date)}
                </li>

         ))
    }
        </div>
      )


}

export default AddComments