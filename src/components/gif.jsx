import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <img className="gif" src={src} alt="gif"
        onClick={this.handleClick}/>
    )
  }

  handleClick = () => {
    this.props.updateGif(this.props.id)
  }
}

export default Gif;
