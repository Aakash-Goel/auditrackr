import React from 'react';
import TestRenderer from 'react-test-renderer';

import Title from '../Title';

describe('Title atom', () => {
  it('renders null if children is not present', () => {
    const titleWrapper = TestRenderer.create(<Title level={1} />).toJSON();
    expect(titleWrapper).toMatchSnapshot();
  });

  it('renders correctly if children is present', () => {
    const titleWrapper = TestRenderer.create(
      <Title level={1}>Heading Tag</Title>
    ).toJSON();
    expect(titleWrapper).toMatchSnapshot();
  });

  it('renders correctly with img object', () => {
    const imgProps = {
      exist: true,
      attr: {
        alt: 'Test img',
      },
    };
    const titleWrapper = TestRenderer.create(
      <Title level={2} img={imgProps}>
        Heading with Image tag
      </Title>
    ).toJSON();
    expect(titleWrapper).toMatchSnapshot();
  });
});
