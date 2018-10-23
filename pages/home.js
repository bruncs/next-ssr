import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from 'antd';
import Stylesheet from '../layout';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = ({ org }) => (
  <div>
    <Head>
      <title>Next vs Gatsby · Home</title>
    </Head>
    <Stylesheet>
      <Button>
        <Link href={`./users/${org}`}>
          <a>Users</a>
        </Link>
      </Button>
    </Stylesheet>
  </div>
);

Home.propTypes = {
  org: PropTypes.string,
};

Home.defaultProps = {
  org: 'zeit',
};

export default withAnalytics()(Home);
