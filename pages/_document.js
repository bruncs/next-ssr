import Document, { Head, Main, NextScript } from 'next/document';

export default class PageDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{'body { background: #EEE }'}</style>
        </Head>
        <Main />
        <NextScript />
      </html>
    );
  }
}
