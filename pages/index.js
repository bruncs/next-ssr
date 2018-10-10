import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import Layout from '../layout';

const Home = () => (
  <Layout>
    <h1>Next vs Gatsby</h1>
    <Button>
      <Link href="/users">Users</Link>
    </Button>
  </Layout>
);

export default Home;
