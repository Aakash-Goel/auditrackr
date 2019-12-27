/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// components
import GridContainer from '../components/atoms/Grid/GridContainer';
import GridItem from '../components/atoms/Grid/GridItem';
import Title from '../components/atoms/Title';
import Paragraph from '../components/atoms/Paragraph';
import Button from '../components/atoms/Button';
import Link from '../components/atoms/Link';
import Select from '../components/atoms/Select';
import Checkbox from '../components/atoms/Checkbox';
import Radio from '../components/atoms/Radio';
import Switch from '../components/atoms/Switch';
import Chip from '../components/atoms/Chip';
import Progress from '../components/atoms/Progress';
import FormWrapper from '../components/organisms/Forms/FormWrapper';
import FormInput from '../components/organisms/Forms/FormInput';

import { colors, fontFamily, defaultFont } from '../styles/variables';
import { checkIsError, validationObject } from '../utils/formInputUtil';

const styleguideStyle = theme => ({
  bgPrimary: {
    background: theme.palette.primary.main,
  },
  bgSecondary: {
    background: theme.palette.secondary.main,
  },
  bgInfo: {
    background: theme.palette.info.main,
  },
  bgSuccess: {
    background: theme.palette.success.main,
  },
  bgWarning: {
    background: theme.palette.warning.main,
  },
  bgError: {
    background: theme.palette.error.main,
  },
  bgWhite: {
    background: theme.palette.common.white,
  },
  bgBlack: {
    background: theme.palette.common.black,
  },
  bgGrey: {
    background: theme.palette.grey[500],
  },

  round: {
    borderRadius: '50%',
  },

  square: {
    width: '40px',
    height: '40px',
  },

  m24: {
    margin: '24px',
  },

  ml16: {
    marginLeft: '16px',
  },

  mt16: {
    marginTop: '16px',
  },

  mb16: {
    marginBottom: '16px',
  },

  p16: {
    padding: '16px',
  },

  pl16: {
    paddingLeft: '16px',
  },

  centerAlign: {
    textAlign: 'center',
  },
  inline: {
    display: 'inline-block',
  },
});

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
};

const defaultProps = {
  formWrapperData: {},
};

class Styleguide extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      multipleSelectedValue: [],
    };

    this.validationObject = {};
    this.handleOnSelectChange = this.handleOnSelectChange.bind(this);
    this.handleOnCheckboxChange = this.handleOnCheckboxChange.bind(this);
    this.handleOnRadioChange = this.handleOnRadioChange.bind(this);
    this.handleOnSwitchChange = this.handleOnSwitchChange.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.handleOnMultipleSelectChange = this.handleOnMultipleSelectChange.bind(
      this
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formWrapperData) {
      this.validationObject = validationObject(nextProps.formWrapperData);
    }
  }

  handleOnSelectChange(e) {
    const { name, value } = e.target;
    console.log('1212===name ', name); // eslint-disable-line no-console
    // console.log('1212===value ', value); // eslint-disable-line no-console
    // console.log('1212===event ', e); // eslint-disable-line no-console

    this.setState({
      selectedValue: value,
    });
  }

  handleOnCheckboxChange() {}

  handleOnRadioChange() {}

  handleOnSwitchChange() {}

  handleOnMultipleSelectChange(e) {
    const { name, value } = e.target;
    console.log('1212===name ', name); // eslint-disable-line no-console
    console.log('1212===value ', value); // eslint-disable-line no-console

    // const value = [];
    // for (let i = 0, l = options.length; i < l; i += 1) {
    //   if (options[i].selected) {
    //     value.push(options[i].value);
    //   }
    // }

    // const updatedVal = [...test.push(value[0])];
    // console.log('1212====updatedVal ', updatedVal);
    // const set = new Set(['GFG', 'JS']);
    //         const array = [...set];

    // this.setState({
    //   multipleSelectedValue: updatedVal,
    // });
  }

  submitFormHandler() {}

  render() {
    const { classes } = this.props;
    const { selectedValue, multipleSelectedValue } = this.state;

    return (
      <>
        <h2 className={classnames(classes.centerAlign)}>Styleguide</h2>
        <section className={classnames(classes.m24)}>
          <h3>Color Palette</h3>
          <hr />
          <GridContainer>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgPrimary,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Primary</div>
                <div>{colors.primary}</div>
                <div>rgb(78, 56, 131)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgSecondary,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Secondary</div>
                <div>{colors.secondary}</div>
                <div>rgb(132, 111, 206)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgInfo,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Info</div>
                <div>{colors.info}</div>
                <div>rgb(70, 136, 241)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgSuccess,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Success</div>
                <div>{colors.success}</div>
                <div>rgb(68, 172, 94)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgWarning,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Warning</div>
                <div>{colors.warning}</div>
                <div>rgb(248, 188, 47)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgError,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Error</div>
                <div>{colors.error}</div>
                <div>rgb(233, 72, 62)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgWhite,
                    classes.round,
                    classes.square
                  )}
                />
                <div>White</div>
                <div>{colors.white}</div>
                <div>rgb(255, 255, 255)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgBlack,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Black</div>
                <div>{colors.black}</div>
                <div>rgb(20, 23, 26)</div>
              </div>
            </GridItem>
            <GridItem xs={2}>
              <div className={classnames(classes.p16)}>
                <div
                  className={classnames(
                    classes.bgGrey,
                    classes.round,
                    classes.square
                  )}
                />
                <div>Grey</div>
                <div>#9e9e9e</div>
                <div>rgb(158, 158, 158)</div>
              </div>
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Typography</h3>
          <hr />
          <GridContainer>
            <GridItem>
              <p>
                Primary Font: <strong>{fontFamily.primary}</strong>
              </p>
              <GridContainer alignItems="baseline">
                <GridItem xs={2}>
                  <Title level={1}>h1. Heading</Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={2}>h2. Heading</Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={3}>h3. Heading</Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={4}>h4. Heading</Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={5}>h5. Heading</Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={6}>h6. Heading</Title>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <p>
                Secondary Font: <strong>{fontFamily.secondary}</strong>
              </p>
              <GridContainer alignItems="baseline">
                <GridItem xs={2}>
                  <Title level={1} theme="secondary">
                    h1. Heading
                  </Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={2} theme="secondary">
                    h2. Heading
                  </Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={3} theme="secondary">
                    h3. Heading
                  </Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={4} theme="secondary">
                    h4. Heading
                  </Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={5} theme="secondary">
                    h5. Heading
                  </Title>
                </GridItem>
                <GridItem xs={2}>
                  <Title level={6} theme="secondary">
                    h6. Heading
                  </Title>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <Paragraph>
                This is a default paragraph using {defaultFont}
              </Paragraph>
              <Paragraph weight="bold">
                This is a paragraph showing the use of bold text,using
                weight=&lsquo;bold&rsquo;
              </Paragraph>
              <Paragraph weight="medium">
                This is a paragraph showing the use of medium text,using
                weight=&lsquo;medium&rsquo;
              </Paragraph>
              <Paragraph weight="light">
                This is a paragraph showing the use of light text,using
                weight=&lsquo;light&rsquo;
              </Paragraph>
              <Paragraph>
                This is a paragraph with <strong>Default</strong> color
              </Paragraph>
              <Paragraph color="primary">
                This is a paragraph with <strong>Primary</strong> color
              </Paragraph>
              <Paragraph color="secondary">
                This is a paragraph with <strong>Secondary</strong> color
              </Paragraph>
              <Paragraph color="info">
                This is a paragraph with <strong>Info</strong> color
              </Paragraph>
              <Paragraph color="success">
                This is a paragraph with <strong>Success</strong> color
              </Paragraph>
              <Paragraph color="warning">
                This is a paragraph with <strong>Warning</strong> color
              </Paragraph>
              <Paragraph color="error">
                This is a paragraph with <strong>Error</strong> color
              </Paragraph>
              <Paragraph color="white">
                This is a paragraph with <strong>White</strong> color
              </Paragraph>
              <Paragraph color="grey">
                This is a paragraph with <strong>Grey</strong> color
              </Paragraph>
              <Paragraph className={classnames(classes.p16)}>
                For more props, check out &lsquo;Paragraph&rsquo; component
              </Paragraph>
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Buttons</h3>
          <hr />
          <GridContainer>
            <p>Button Types</p>
            <GridItem>
              <p>
                <strong>Round</strong> (Default)
              </p>
              <Button>Primary</Button>
              <Button color="secondary" className={classnames(classes.ml16)}>
                Secondary
              </Button>
              <Button color="info" className={classnames(classes.ml16)}>
                Info
              </Button>
              <Button color="success" className={classnames(classes.ml16)}>
                Success
              </Button>
              <Button color="warning" className={classnames(classes.ml16)}>
                Warning
              </Button>
              <Button color="error" className={classnames(classes.ml16)}>
                Error
              </Button>
              <Button color="white" className={classnames(classes.ml16)}>
                White
              </Button>
              <Button color="black" className={classnames(classes.ml16)}>
                Black
              </Button>
              <Button color="grey" className={classnames(classes.ml16)}>
                Grey
              </Button>
              <Button disabled className={classnames(classes.ml16)}>
                Disabled
              </Button>
            </GridItem>
            <GridItem>
              <p>
                <strong>Square</strong>
              </p>
              <Button round={false}>Primary</Button>
              <Button
                round={false}
                color="secondary"
                className={classnames(classes.ml16)}
              >
                Secondary
              </Button>
              <Button
                round={false}
                color="info"
                className={classnames(classes.ml16)}
              >
                Info
              </Button>
              <Button
                round={false}
                color="success"
                className={classnames(classes.ml16)}
              >
                Success
              </Button>
              <Button
                round={false}
                color="warning"
                className={classnames(classes.ml16)}
              >
                Warning
              </Button>
              <Button
                round={false}
                color="error"
                className={classnames(classes.ml16)}
              >
                Error
              </Button>
              <Button
                round={false}
                color="white"
                className={classnames(classes.ml16)}
              >
                White
              </Button>
              <Button
                round={false}
                color="black"
                className={classnames(classes.ml16)}
              >
                Black
              </Button>
              <Button
                round={false}
                color="grey"
                className={classnames(classes.ml16)}
              >
                Grey
              </Button>
              <Button
                disabled
                round={false}
                className={classnames(classes.ml16)}
              >
                Disabled
              </Button>
            </GridItem>
            <p className={classnames(classes.mt16)}>Button Styles</p>
            <GridItem>
              <p>
                <strong>Simple</strong>
              </p>
              <Button simple>Primary</Button>
              <Button
                simple
                color="secondary"
                className={classnames(classes.ml16)}
              >
                Secondary
              </Button>
              <Button simple color="info" className={classnames(classes.ml16)}>
                Info
              </Button>
              <Button
                simple
                color="success"
                className={classnames(classes.ml16)}
              >
                Success
              </Button>
              <Button
                simple
                color="warning"
                className={classnames(classes.ml16)}
              >
                Warning
              </Button>
              <Button simple color="error" className={classnames(classes.ml16)}>
                Error
              </Button>
              <Button simple color="white" className={classnames(classes.ml16)}>
                White
              </Button>
              <Button simple color="black" className={classnames(classes.ml16)}>
                Black
              </Button>
              <Button simple color="grey" className={classnames(classes.ml16)}>
                Grey
              </Button>
              <Button simple disabled className={classnames(classes.ml16)}>
                Disabled
              </Button>
            </GridItem>
            <GridItem>
              <p>
                <strong>Outline</strong>
              </p>
              <Button outlined>Primary</Button>
              <Button
                outlined
                color="secondary"
                className={classnames(classes.ml16)}
              >
                Secondary
              </Button>
              <Button
                outlined
                color="info"
                className={classnames(classes.ml16)}
              >
                Info
              </Button>
              <Button
                outlined
                color="success"
                className={classnames(classes.ml16)}
              >
                Success
              </Button>
              <Button
                outlined
                color="warning"
                className={classnames(classes.ml16)}
              >
                Warning
              </Button>
              <Button
                outlined
                color="error"
                className={classnames(classes.ml16)}
              >
                Error
              </Button>
              <Button
                outlined
                color="white"
                className={classnames(classes.ml16)}
              >
                White
              </Button>
              <Button
                outlined
                color="black"
                className={classnames(classes.ml16)}
              >
                Black
              </Button>
              <Button
                outlined
                color="grey"
                className={classnames(classes.ml16)}
              >
                Grey
              </Button>
              <Button outlined disabled className={classnames(classes.ml16)}>
                Disabled
              </Button>
            </GridItem>
            <GridItem>
              <p className={classnames(classes.mt16)}>
                <strong>Link</strong>
              </p>
              <Button link>Primary</Button>
              <Button
                link
                color="secondary"
                className={classnames(classes.ml16)}
              >
                Secondary
              </Button>
              <Button link color="info" className={classnames(classes.ml16)}>
                Info
              </Button>
              <Button link color="success" className={classnames(classes.ml16)}>
                Success
              </Button>
              <Button link color="warning" className={classnames(classes.ml16)}>
                Warning
              </Button>
              <Button link color="error" className={classnames(classes.ml16)}>
                Error
              </Button>
              <Button link color="white" className={classnames(classes.ml16)}>
                White
              </Button>
              <Button link color="black" className={classnames(classes.ml16)}>
                Black
              </Button>
              <Button link color="grey" className={classnames(classes.ml16)}>
                Grey
              </Button>
              <Button link disabled className={classnames(classes.ml16)}>
                Disabled
              </Button>
            </GridItem>
            <p className={classnames(classes.mt16)}>Button Sizes</p>
            <GridItem>
              <Button size="sm">Small</Button>
              <Button size="md" className={classnames(classes.ml16)}>
                Medium
              </Button>
              <Button className={classnames(classes.ml16)}>Default</Button>
              <Button size="lg" className={classnames(classes.ml16)}>
                Large
              </Button>
            </GridItem>
            <p className={classnames(classes.mt16)}>Button Weights</p>
            <GridItem>
              <Button weight="light">Light</Button>
              <Button weight="medium" className={classnames(classes.ml16)}>
                Medium
              </Button>
              <Button className={classnames(classes.ml16)}>Default</Button>
              <Button weight="bold" className={classnames(classes.ml16)}>
                Bold
              </Button>
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Anchors</h3>
          <hr />
          <GridContainer>
            <p>
              <strong>Colors</strong>
            </p>
            <GridItem>
              <Link href="/styleguide">Primary</Link>
              <Link
                href="/styleguide"
                color="secondary"
                className={classnames(classes.ml16)}
              >
                Secondary
              </Link>
              <Link
                href="/styleguide"
                color="info"
                className={classnames(classes.ml16)}
              >
                Info
              </Link>
              <Link
                href="/styleguide"
                color="success"
                className={classnames(classes.ml16)}
              >
                Success
              </Link>
              <Link
                href="/styleguide"
                color="warning"
                className={classnames(classes.ml16)}
              >
                Warning
              </Link>
              <Link
                href="/styleguide"
                color="error"
                className={classnames(classes.ml16)}
              >
                Error
              </Link>
              <Link
                href="/styleguide"
                color="white"
                className={classnames(classes.ml16)}
              >
                White
              </Link>
              <Link
                href="/styleguide"
                color="black"
                className={classnames(classes.ml16)}
              >
                Black
              </Link>
              <Link
                href="/styleguide"
                color="grey"
                className={classnames(classes.ml16)}
              >
                Grey
              </Link>
              <Link
                href="/styleguide"
                color="inherit"
                className={classnames(classes.ml16)}
              >
                Inherit
              </Link>
              <a href="#" className={classnames(classes.ml16)}>
                Normal HTML Anchor
              </a>
            </GridItem>
            <p>
              <strong>Sizes</strong>
            </p>
            <GridItem>
              <Link href="/styleguide" size="sm">
                Small
              </Link>
              <Link
                href="/styleguide"
                size="md"
                className={classnames(classes.ml16)}
              >
                Medium
              </Link>
              <Link href="/styleguide" className={classnames(classes.ml16)}>
                Default
              </Link>
              <Link
                href="/styleguide"
                size="lg"
                className={classnames(classes.ml16)}
              >
                Large
              </Link>
            </GridItem>
            <p>
              <strong>Weights</strong>
            </p>
            <GridItem>
              <Link href="/styleguide" weight="light">
                Light
              </Link>
              <Link href="/styleguide" className={classnames(classes.ml16)}>
                Default
              </Link>
              <Link
                href="/styleguide"
                weight="medium"
                className={classnames(classes.ml16)}
              >
                Medium
              </Link>
              <Link
                href="/styleguide"
                weight="bold"
                className={classnames(classes.ml16)}
              >
                Bold
              </Link>
            </GridItem>
            <p>
              <strong>Transforms</strong>
            </p>
            <GridItem>
              <Link href="/styleguide">Default</Link>
              <Link
                href="/styleguide"
                textTransform="cap"
                className={classnames(classes.ml16)}
              >
                Capitalize
              </Link>
              <Link
                href="/styleguide"
                textTransform="upc"
                className={classnames(classes.ml16)}
              >
                Uppercase
              </Link>
              <Link
                href="/styleguide"
                textTransform="lwc"
                className={classnames(classes.ml16)}
              >
                Lowercase
              </Link>
              <Link
                href="/styleguide"
                textTransform="nn"
                className={classnames(classes.ml16)}
              >
                None
              </Link>
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Inputs</h3>
          <hr />
          <FormWrapper
            id="styleguideForm"
            identifier="styleguideForm"
            onSubmit={this.submitFormHandler}
            formWrapperData={this.props.formWrapperData}
            className={classnames(classes.formWrapper)}
            noValidate
            autoComplete="off"
          >
            <GridContainer>
              <GridItem xs={3}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="Default Input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input1',
                    name: 'input1',
                    'aria-label': 'Default Input',
                  }}
                  {...{
                    input1Error: this.validationObject.emailIdError,
                  }}
                  error={checkIsError(this.props.formWrapperData, 'input1')}
                />
              </GridItem>
              <GridItem xs={3} className={classnames(classes.pl16)}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="Required"
                  formControlProps={{
                    required: true,
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input2',
                    name: 'input2',
                    'aria-label': 'Required',
                  }}
                  {...{
                    input2Error: this.validationObject.emailIdError,
                  }}
                  error={checkIsError(this.props.formWrapperData, 'input2')}
                />
              </GridItem>
              <GridItem xs={3} className={classnames(classes.pl16)}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="Disabled Input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input3',
                    name: 'input3',
                    'aria-label': 'Disabled Input',
                    disabled: true,
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={3}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="Error Input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input4',
                    name: 'input4',
                    'aria-label': 'Error Input',
                  }}
                  {...{
                    input4Error: 'Error Input Message',
                  }}
                  error
                />
              </GridItem>
              <GridItem xs={3} className={classnames(classes.pl16)}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="Success Input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input5',
                    name: 'input5',
                    'aria-label': 'Success Input',
                  }}
                  success
                />
              </GridItem>
              <GridItem xs={3} className={classnames(classes.pl16)}>
                <FormInput
                  validationRule="email"
                  identifier="styleguideForm"
                  labelText="White Input"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    id: 'input6',
                    name: 'input6',
                    'aria-label': 'White Input',
                  }}
                  white
                />
              </GridItem>
            </GridContainer>
          </FormWrapper>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Select</h3>
          <hr />
          <GridContainer>
            <GridItem xs={3}>
              <Select
                labelText="Simple select"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  optionList: [
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-simple-select',
                  name: 'demo-simple-select',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select helper text"
                helperText="Some important helper text"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  displayLabelAsOption: false,
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-helper',
                  name: 'demo-select-helper',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                helperText="Without label"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  displayEmpty: true,
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-without-label',
                  name: 'demo-select-without-label',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="Label + placeholder"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  displayEmpty: true,
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-placeholder-label',
                  name: 'demo-select-placeholder-label',
                  value: selectedValue,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={3}>
              <Select
                labelText="Select Age"
                helperText="Disabled"
                onSelectChange={e => this.handleOnSelectChange(e)}
                formControlProps={{
                  disabled: true,
                }}
                selectProps={{
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-disabled',
                  name: 'demo-select-disabled',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="Error"
                onSelectChange={e => this.handleOnSelectChange(e)}
                formControlProps={{
                  error: true,
                }}
                selectProps={{
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-error',
                  name: 'demo-select-error',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="Read only"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-read-only',
                  name: 'demo-select-read-only',
                  value: selectedValue,
                  readOnly: true,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="Auto width"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                  autoWidth: true,
                }}
                inputProps={{
                  id: 'demo-select-auto-width',
                  name: 'demo-select-auto-width',
                  value: selectedValue,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={3}>
              <Select
                labelText="Select Age"
                helperText="Required"
                onSelectChange={e => this.handleOnSelectChange(e)}
                formControlProps={{
                  required: true,
                }}
                selectProps={{
                  optionList: [
                    { name: 'None', value: '' },
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                  autoWidth: true,
                }}
                inputProps={{
                  id: 'demo-select-required',
                  name: 'demo-select-required',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="With Header Text"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  selectHeaderText: 'Age In:',
                  displayLabelAsOption: true,
                  optionList: [
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-header',
                  name: 'demo-select-header',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="With Divider in Options"
                onSelectChange={e => this.handleOnSelectChange(e)}
                selectProps={{
                  selectHeaderText: 'Age In:',
                  displayLabelAsOption: false,
                  optionList: [
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                    { divider: true },
                    { name: 'Forty', value: 40 },
                    { name: 'Fifty', value: 50 },
                    { name: 'Sixty', value: 60 },
                    {
                      name: 'Seventy',
                      value: 70,
                      disabled: true,
                    },
                    { name: 'Eighty', value: 80 },
                    { name: 'Ninety', value: 90 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-divider',
                  name: 'demo-select-divider',
                  value: selectedValue,
                }}
              />
            </GridItem>
            <GridItem xs={3} className={classnames(classes.pl16)}>
              <Select
                labelText="Select Age"
                helperText="With Multiple Selection"
                onSelectChange={e => this.handleOnMultipleSelectChange(e)}
                selectProps={{
                  selectHeaderText: 'Age In:',
                  displayLabelAsOption: false,
                  multiple: true,
                  optionList: [
                    { name: 'Ten', value: 10 },
                    { name: 'Twenty', value: 20 },
                    { name: 'Thirty', value: 30 },
                    { divider: true },
                    { name: 'Forty', value: 40 },
                    { name: 'Fifty', value: 50 },
                    { name: 'Sixty', value: 60 },
                    {
                      name: 'Seventy',
                      value: 70,
                      disabled: true,
                    },
                    { name: 'Eighty', value: 80 },
                    { name: 'Ninety', value: 90 },
                  ],
                }}
                inputProps={{
                  id: 'demo-select-multiple',
                  name: 'demo-select-multiple',
                  value: multipleSelectedValue,
                }}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Checkboxes</h3>
          <hr />
          <GridContainer>
            <GridItem xs={3}>
              <Checkbox
                formControlLabelProps={{
                  label: 'Checked',
                }}
                checkboxProps={{
                  disabled: false,
                  required: true,
                  checked: true,
                  onChange: this.handleOnCheckboxChange('hasTermsChecked'),
                  value: true,
                  inputProps: {
                    'aria-label': 'terms and condition checkbox',
                  },
                }}
              />
            </GridItem>
            <GridItem xs={3}>
              <Checkbox
                formControlLabelProps={{
                  label: 'Unchecked',
                }}
                checkboxProps={{
                  disabled: false,
                  required: true,
                  checked: false,
                  onChange: this.handleOnCheckboxChange('hasTermsChecked'),
                  value: false,
                  inputProps: {
                    'aria-label': 'terms and condition checkbox',
                  },
                }}
              />
            </GridItem>
            <GridItem xs={3}>
              <Checkbox
                formControlLabelProps={{
                  label: 'Disabled Checked',
                }}
                checkboxProps={{
                  disabled: true,
                  required: false,
                  checked: true,
                  onChange: this.handleOnCheckboxChange('hasTermsChecked'),
                  value: true,
                  inputProps: {
                    'aria-label': 'terms and condition checkbox',
                  },
                }}
              />
            </GridItem>
            <GridItem xs={3}>
              <Checkbox
                formControlLabelProps={{
                  label: 'Disabled Unchecked',
                }}
                checkboxProps={{
                  disabled: true,
                  required: false,
                  checked: false,
                  onChange: this.handleOnCheckboxChange('hasTermsChecked'),
                  value: false,
                  inputProps: {
                    'aria-label': 'terms and condition checkbox',
                  },
                }}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Radios</h3>
          <hr />
          <GridContainer>
            <GridItem xs={3}>
              <Radio
                options={[
                  {
                    radioProps: {
                      checked: true,
                      value: 'checked',
                      name: 'radio-button-checked',
                      'aria-label': 'checked',
                    },
                    formControlLabelProps: {
                      label: 'Checked',
                    },
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={3}>
              <Radio
                options={[
                  {
                    radioProps: {
                      checked: false,
                      value: 'unchecked',
                      name: 'radio-button-unchecked',
                      'aria-label': 'unchecked',
                    },
                    formControlLabelProps: {
                      label: 'Unchecked',
                    },
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={3}>
              <Radio
                options={[
                  {
                    radioProps: {
                      checked: true,
                      value: 'disabled-checked',
                      name: 'radio-button-disabled-checked',
                      'aria-label': 'disabled-checked',
                    },
                    formControlLabelProps: {
                      disabled: true,
                      label: 'Disabled Checked',
                    },
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={3}>
              <Radio
                options={[
                  {
                    radioProps: {
                      checked: false,
                      value: 'disabled-unchecked',
                      name: 'radio-button-disabled-unchecked',
                      'aria-label': 'disabled-unchecked',
                    },
                    formControlLabelProps: {
                      disabled: true,
                      label: 'Disabled Unchecked',
                    },
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Switch</h3>
          <hr />
          <GridContainer>
            <GridItem xs={3}>
              <Switch
                switchProps={{
                  checked: true,
                  onChange: this.handleOnSwitchChange('on'),
                  value: 'on',
                  // color: 'primary',
                }}
                formControlLabelProps={{
                  label: 'Switch is on',
                }}
              />
            </GridItem>
            <GridItem xs={3}>
              <Switch
                switchProps={{
                  checked: false,
                  onChange: this.handleOnSwitchChange('off'),
                  value: 'off',
                  // color: 'primary',
                }}
                formControlLabelProps={{
                  label: 'Switch is off',
                }}
              />
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Chip</h3>
          <hr />
          <GridContainer>
            <GridItem>
              <Chip label="Basic" />
              <Chip label="Disabled" disabled />
            </GridItem>
          </GridContainer>
        </section>
        <section className={classnames(classes.m24)}>
          <h3>Progress</h3>
          <hr />
          <GridContainer>
            <GridItem>
              <p>
                <strong>Colors</strong>
              </p>
              <Progress className={classnames(classes.mb16)} />
              <Progress
                color="secondary"
                className={classnames(classes.mb16)}
              />
            </GridItem>
            <GridItem>
              <p>
                <strong>Variants</strong>
              </p>
              <Progress
                variant="determinate"
                value={40}
                className={classnames(classes.mb16)}
              />
              <Progress
                variant="buffer"
                value={20}
                valueBuffer={60}
                className={classnames(classes.mb16)}
              />
              <Progress variant="query" className={classnames(classes.mb16)} />
            </GridItem>
          </GridContainer>
        </section>
      </>
    );
  }
}

Styleguide.propTypes = propTypes;
Styleguide.defaultProps = defaultProps;

export default withStyles(styleguideStyle)(Styleguide);
