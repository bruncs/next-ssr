import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import { Button, Input } from 'antd';
import Stylesheet from '../layout';

import withAnalytics from '~/hocs/withAnalytics';

class Home extends Component {
  state = {
    org: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { org } = this.state;
    return (
      <div>
        <Head>
          <title>Next vs Gatsby · Home</title>
        </Head>
        <Stylesheet>
          <Input name="org" placeholder="Organization" onChange={this.handleChange} value={org} />
          <Button>
            <Link href={`./users/${org}`}>
              <a>Users</a>
            </Link>
          </Button>
        </Stylesheet>
      </div>
    );
  }
}

export default withAnalytics()(Home);
