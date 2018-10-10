import React from 'react';
import Head from 'next/head';

export default ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="http://cdn.bootcss.com/antd/2.9.3/antd.css" />
    </Head>
    {children}
  </div>
);
