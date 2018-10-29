import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import { Form, Button, Input } from 'antd';
import Stylesheet from '../layout';

import withAnalytics from '~/hocs/withAnalytics';

class Home extends Component {
  state = {
    org: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    Router.push(`/users/${this.state.org}`);
  };

  render() {
    const { org } = this.state;
    return (
      <div>
        <Head>
          <title>Next SSR · Home</title>
        </Head>
        <Stylesheet>
          <Form onSubmit={this.handleSubmit}>
            <Input name="org" placeholder="Organization" onChange={this.handleChange} value={org} />
            <Button type="primary" htmlType="submit">
              Users
            </Button>
          </Form>
        </Stylesheet>
      </div>
    );
  }
}

export default withAnalytics()(Home);
