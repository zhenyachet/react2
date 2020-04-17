import React from 'react';
import AddComments from './AddComments'



const addcomments = document.__moreComments

class SortingMyArray extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addcomments: addcomments,
            isClicked : false
        }

        this.sortBy = this.sortBy.bind(this)
    }

    sortBy() {
            let sortedComments = [...this.state.addcomments].sort((a,b) => new Date(a.date) - new Date(b.date));
            this.setState({
            addcomments: sortedComments,
            isClicked : true
           })
            console.log(this.state.isClicked)
    }
render() {
  const { isClicked } = this.state;
        return (
            <div>
             <div>
             <button onClick={() => this.sortBy()}>
               AdditionalCommentaries
           </button>
             </div>
             {isClicked && (
              <div>
              <AddComments addcomments = {this.state.addcomments} />
              </div>
          )}
         </div>
    );
    }




            }


export default SortingMyArray;