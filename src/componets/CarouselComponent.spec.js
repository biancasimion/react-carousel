import React from 'react';
import Carousel from './CarouselComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Carousel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});