import React, { Component } from 'react';

import Gif from './gif.jsx'


const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} updateGif={props.updateGif}/>)}
    </div>
  )
}

// class GifList extends Component {
//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     )
//   }

//   renderList = () => {
//     return this.props.gifs.map(gif => <Gif id={gif} key={gif} updateGif={this.props.updateGif}/>)
//   }
// }

export default GifList;
