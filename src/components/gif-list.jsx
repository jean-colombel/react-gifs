import React from 'react';
import Gif from './gif.jsx'

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} updateGif={props.updateGif}/>)}
    </div>
  )
}

export default GifList;
