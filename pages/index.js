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
      <Layout>
        <Header>
          <h1>Next vs Gatsby</h1>
        </Header>
        <Content justify="center">
          <Col span={12}>
            <Row type="flex" justify="center">
              Pariatur eiusmod consectetur do veniam eu amet exercitation cillum eu irure. Laboris
              non veniam non Lorem nostrud sunt laboris excepteur non elit commodo ad pariatur. Id
              labore reprehenderit amet nostrud aute quis commodo et nostrud. Ipsum occaecat minim
              sit labore tempor non. Ea consectetur proident laboris aliquip cupidatat pariatur
              nisi. Proident tempor proident occaecat exercitation amet consequat sunt non in
              commodo incididunt id ipsum do. Aliquip fugiat qui cupidatat amet ut.
              <Button type="primary">
                <Link href="/users">
                  <a>Users</a>
                </Link>
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="center">
              Pariatur eiusmod consectetur do veniam eu amet exercitation cillum eu irure. Laboris
              non veniam non Lorem nostrud sunt laboris excepteur non elit commodo ad pariatur. Id
              labore reprehenderit amet nostrud aute quis commodo et nostrud. Ipsum occaecat minim
              sit labore tempor non. Ea consectetur proident laboris aliquip cupidatat pariatur
              nisi. Proident tempor proident occaecat exercitation amet consequat sunt non in
              commodo incididunt id ipsum do. Aliquip fugiat qui cupidatat amet ut.
              <Button type="primary">
                <Link href="/users">
                  <a>Users</a>
                </Link>
              </Button>
            </Row>
          </Col>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Stylesheet>
  </div>
);

export default Home;
