import React from 'react'



class Article extends React.Component {

 componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }
    render() {
    return(
    <div>
                    <p align = 'left'><b> Author:</b> <em>{document.__article.author}</em></p>
                    <p align = 'left'><b> Text of article:</b>  {document.__article.text} </p>
                    <p align = 'left'><b> Date:</b> {Date(document.__article.date)}</p>

        </div>
       )
  }
}

export default Article;



