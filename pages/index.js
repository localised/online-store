
import { fetchProducts } from '../features/product/slice';
import Head from 'next/head';

import ProductSection from '../features/product';
import CartSection from '../features/cart';

const ProductPage = () => (
    <>
        <Head>
            <title>Product Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <menu className='menu'>
            <h1 className="title">Store</h1>
            <CartSection />
        </menu>
        <ProductSection />
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
            body {
                margin: 0;
            }
            .menu {
                display: flex;
                background-color: grey;
                margin: 0;
                height: 50px;
            }
            .title {
                flex: 0 0 auto;
                font-family: 'Lato', sans-serif;
                margin: 0;
            }
        `}</style>
    </>
);

ProductPage.getInitialProps = async ({store, pathname, req, res}) => {
    await store.dispatch(fetchProducts());
    return {};
};


export default ProductPage;
