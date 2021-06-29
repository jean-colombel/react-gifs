import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search-bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "e2pxsrF7Lbe1i"
    }
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGif={this.updateGif}/>
        </div>
      </div>
    )
  }

  search = (query) => {
    //TODO API call
    giphy('nxjJ6nnoXszHOVIhzodwYxZYEy74VEIG').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }
}

export default App;
