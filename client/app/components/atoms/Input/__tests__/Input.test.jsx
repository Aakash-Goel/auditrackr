import React from 'react';
import TestRenderer from 'react-test-renderer';

import Input from '../Input';

describe('<Input />', () => {
  it('renders correctly', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        identifier="testForm"
        labelText="Required"
        formWrapperSelector={{}}
        formControlProps={{
          required: true,
        }}
        updateFormIdentifierData={jest.fn()}
        addFormIdentifierData={jest.fn()}
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly if formControlProps and labelText is not passed', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        identifier="testForm"
        formWrapperSelector={{}}
        updateFormIdentifierData={jest.fn()}
        addFormIdentifierData={jest.fn()}
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly in error state', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        identifier="testForm"
        labelText="Error Input Prop"
        formWrapperSelector={{}}
        inputProps={{
          error: true,
          'aria-label': 'Description',
        }}
        updateFormIdentifierData={jest.fn()}
        addFormIdentifierData={jest.fn()}
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });

  it('renders correctly in success state', () => {
    const inputWrapper = TestRenderer.create(
      <Input
        identifier="testForm"
        labelText="Success Prop"
        formWrapperSelector={{}}
        updateFormIdentifierData={jest.fn()}
        addFormIdentifierData={jest.fn()}
        id="success"
        success
      />
    ).toJSON();
    expect(inputWrapper).toMatchSnapshot();
  });
});
