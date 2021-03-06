import React, { Component } from 'react';

import SearchBar from './search-bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

const GIPHY_API_KEY = "nxjJ6nnoXszHOVIhzodwYxZYEy74VEIG"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "TwtXMS5EnKDBK"
    };

    this.search = this.search.bind(this);
    this.updateGif = this.updateGif.bind(this);
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
    const giphEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
    fetch(giphEndPoint)
      .then(response => response.json())
      .then((data) => {
        const gifs = data.data.map(giph => giph.id)
        this.setState({
          gifs: gifs
        })
      })
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }
}

export default App;
