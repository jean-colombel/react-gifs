import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} updateGif={this.props.updateGif}/>)
  }
}

export default GifList;
