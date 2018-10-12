import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Layout, Button, Row, Col,
} from 'antd';
import Stylesheet from '../layout';

const { Header, Footer, Content } = Layout;

const Home = () => (
  <div>
    <Head>
      <title>Next vs Gatsby · Home</title>
    </Head>
    <Stylesheet>
      <Button>
        <Link href="./users">
          <a>Users</a>
        </Link>
      </Button>
    </Stylesheet>
  </div>
);

export default Home;
