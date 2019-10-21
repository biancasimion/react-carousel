import React, { Component } from 'react';

class Slides extends Component {
  render () {
    const { images } = this.props;
    return (
      <div className="slides">{
        images.map((url, index) => {
          return (  
            <div className="slide" key={index}>
              <img alt='' src={url} />
            </div>
          )
        })
      }</div>
    );
  }
}

export default Slides;