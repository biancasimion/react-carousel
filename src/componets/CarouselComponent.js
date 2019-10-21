import React, { Component } from 'react';
import Slide from './SlideComponent';
import fetchData from '../helpers/fetchImagesHelper';

class Carousel extends Component {
  constructor () {
    super();

    this.state = {
      images: [],
      image: {},
    }
  }
  
  componentDidMount () {
    fetchData.loadImages()
      .then((response) => {
        const images = response.hits.map((item, index) => {
          return {
            url: item.largeImageURL,
            index: index,
            tags: item.tags,
          }
        });

        this.setState({
          images,
          image: images[0],
        })
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getNextSlide() {
    const { image, images } = this.state;
    const newIndex = (image.index + 1);
    this.setState({
      image: images[newIndex],
    })
  }
   
  getPreviousSlide() {
    const { image, images } = this.state;
    const newIndex = image.index - 1;
    this.setState({
      image: images[newIndex],
    })
  }

  render () {
    const { image, images } = this.state;
    return (
      <div>
        <div className="carousel">
          <button 
            className="button prev mobile-btn"
            onClick={() => this.getPreviousSlide()}
            >
              Previous
          </button>
          <button 
            className="button next mobile-btn"
            onClick={() => this.getNextSlide()}
          >
            Next
          </button>
          <div className={`slides active-slide-index-${image.index}`}>
            <div 
              className="slides__container" style={{
                transform: `translateX(-${image.index*(100/images.length)}%)`
              }}
            >
              {
                images.map((image) => <Slide key={image.index} image={image} />)
              }
            </div>
          </div>
        </div>
         
      </div>
    );
  }
}

export default Carousel;