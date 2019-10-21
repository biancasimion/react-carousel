import React, { Component } from 'react';

class Slide extends Component {
  render () {
    const { image } = this.props;
    return (
      <div className="slide" key={image.index}>
        <img alt='' src={image.url} />
        <h4>{image.tags}</h4>
      </div>
    );
  }
}

export default Slide;
