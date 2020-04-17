import React from 'react';
import Article from './Article'
import CommentList from './CommentList'

class LifecicleRendering extends React.Component {
     constructor(props) {
    super()
    this.state = { displayCommentList: false }
    this.displayCommentList = this.displayCommentList.bind(this)
  }


  displayCommentList() {
    setTimeout(() => {
      this.setState({ displayCommentList: true })
    }, 2000) // delay
  }


    render(){
   return (
    <div>
        <Article onComponentDidMount={this.displayCommentList}/>
        {
          this.state.displayCommentList &&
         <CommentList />}
    </div>
    );
    }
}

export default LifecicleRendering;