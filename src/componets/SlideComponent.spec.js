import React from 'react';
import Slide from './SlideComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Slide image={
      {
        url: 'test.com',
        index: 0,
        tags: 'test test',
      }

    }/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});