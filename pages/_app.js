import { wrapper } from '../config/store';
import App from "next/app";

class MyApp extends App{
    static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
      return { pageProps };
    }
  
    render() {
      const { Component, pageProps } = this.props;
  
      return <Component {...pageProps} />;
    }
  }

export default wrapper.withRedux(MyApp);