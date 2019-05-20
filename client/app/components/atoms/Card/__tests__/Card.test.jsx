import React from 'react';
import TestRenderer from 'react-test-renderer';

import Card from '../Card';

describe('Card atom', () => {
  it('should render correctly', () => {
    const cardWrapper = TestRenderer.create(
      <Card>Card content goes here</Card>
    ).toJSON();
    expect(cardWrapper).toMatchSnapshot();
  });
});
