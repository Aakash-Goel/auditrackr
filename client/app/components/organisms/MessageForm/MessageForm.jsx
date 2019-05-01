import React, { Component } from 'react';
import Link from 'next/link';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import ServiceUtil from '../../../utils/serviceUtil';

/* istanbul ignore next */
class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageArr: [],
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitMessage = event => {
    event.preventDefault();

    const txtMessage = this.state.message;

    if (txtMessage.trim().length === 0) {
      return;
    }

    const requestData = {
      query: `
        mutation {
          createMessage(messageInput: {title: "${txtMessage}"}) {
            _id
            title
          }
        }
      `,
    };

    ServiceUtil.triggerRequest({
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(requestData),
    })
      .then(response => {
        // console.log('response>>> ', response); // eslint-disable-line
        const { data } = response && response.body;
        console.log('response data>>> ', data); // eslint-disable-line
        alert('Successfully Submitted!!!'); // eslint-disable-line
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  getMessages = () => {
    const requestData = {
      query: `
        query {
          messages {
            _id
            title
          }
        }
      `,
    };

    ServiceUtil.triggerRequest({
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(requestData),
    })
      .then(response => {
        // console.log('response>>> ', response); // eslint-disable-line
        const { data } = response && response.body;
        console.log('response data>>> ', data); // eslint-disable-line
        this.setState({
          messageArr: data.messages,
        });
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  render() {
    const { message, messageArr } = this.state;

    return (
      <div>
        <div>
          <Link href="/login">
            <Button type="submit" color="primary">
              Go to Login Page
            </Button>
          </Link>
        </div>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <h2>Enter your message below:</h2>
            <form noValidate autoComplete="off" onSubmit={this.submitMessage}>
              <div>
                <Input
                  labelText="Message"
                  formControlProps={{
                    required: true,
                  }}
                  inputProps={{
                    value: message,
                    onChange: this.handleChange('message'),
                    'aria-label': 'Message Input',
                  }}
                />
              </div>
              <div>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </GridItem>
          <GridItem xs={10}>
            <h2>List of messages sumitted:</h2>
            <div>
              <Button color="primary" outlined onClick={this.getMessages}>
                Get All Messages
              </Button>
              {messageArr && messageArr.length > 0
                ? messageArr.map((msz, index) => {
                    return <p key={index}>{msz.title}</p>; // eslint-disable-line react/no-array-index-key
                  })
                : null}
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default MessageForm;
