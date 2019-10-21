import React, { Component } from 'react';
import Slides from './SlidesComponent';
import fetchData from '../helpers/fetchImagesHelper';

class Carousel extends Component {
  constructor () {
    super();

    this.state = {
      images: [],
      imageIndex: 0,
    }
  }
  
  componentDidMount () {
    fetchData.loadImages()
      .then((response) => {
        const images = response.hits.map((item) => item.largeImageURL );
        this.setState({
          images
        })
      })
      .catch((e) => {
        console.log('Error', e);
      });
  }

  render () {
    return (
      <div className="carousel">
        <Slides images={this.state.images}/>
      </div>
    );
  }
}

export default Carousel;