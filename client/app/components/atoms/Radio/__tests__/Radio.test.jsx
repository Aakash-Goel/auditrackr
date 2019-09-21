import React from 'react';
import TestRenderer from 'react-test-renderer';

import Radio from '../Radio';

describe('<Radio />', () => {
  it('renders correctly', () => {
    const radioWrapper = TestRenderer.create(
      <Radio
        options={[
          {
            radioProps: {
              checked: true,
              value: 'a',
              name: 'radio-button-demo',
              'aria-label': 'A',
            },
          },
        ]}
      />
    ).toJSON();
    expect(radioWrapper).toMatchSnapshot();
  });

  it('renders correctly if radioGroupProps is passed', () => {
    const radioWrapper = TestRenderer.create(
      <Radio
        radioGroupProps={{
          'aria-label': 'Gender',
          name: 'gender1',
          value: 'female',
        }}
        options={[
          {
            radioProps: {
              checked: false,
              value: 'a',
              name: 'radio-button-demo',
              'aria-label': 'A',
            },
          },
        ]}
      />
    ).toJSON();
    expect(radioWrapper).toMatchSnapshot();
  });
});
