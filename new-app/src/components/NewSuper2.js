import React from 'react'



function NewSuper2(props) {

   return (
        <div>
        <button
            onClick={() => props.sortBy('author')}
        >Sort</button>
   {    props.addcomments.map(row => (
            <tr>
                <td>{row.id}</td>
                <td>{row.author}</td>
                <td>{row.text}</td>
                <td>{row.date}</td>
            </tr>
         ))
   }
        </div>
      )


}

export default NewSuper2