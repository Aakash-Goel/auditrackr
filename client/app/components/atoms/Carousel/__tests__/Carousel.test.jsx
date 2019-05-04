import React from 'react';
import TestRenderer from 'react-test-renderer';

import Carousel from '../Carousel';

describe('Carousel atom', () => {
  it('should renders correctly', () => {
    const carouselWrapper = TestRenderer.create(
      <Carousel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    ).toJSON();
    expect(carouselWrapper).toMatchSnapshot();
  });
});
