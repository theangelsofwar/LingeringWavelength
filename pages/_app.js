import App from 'next/app';
import Head from 'next/head';

class Wavelength extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title> Wavelength </title>
                    <meta charSet="utf-8" />
                </Head>

                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}

export default Wavelength;