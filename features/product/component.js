import React from 'react';

import ImageList from '../../components/image-list';
import VariantSelect from '../../components/variant-selector';

const ProductSection = ({
    currentSKU : {
        title,
        description,
        price,
        images,
        variant,
        skuId,
    },
    availableVariants,
    selectVariant,
    addToCart
    }) => {
    return (
        <>
            <main className="product-section">
                <section className="product-section__images">
                    <ImageList images={images} />
                </section>
                <section className="product-section__info">
                    <h1 className="product-section__title">{title}</h1>
                    <p className="product-section__price">{
                        price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                    }</p>
                    <p className="product-section__description">{description}</p>
                    {
                        Object.entries(availableVariants).map(([category, variants]) => (
                            <div key={category}>
                                <label htmlFor={category}>Select {category}</label>
                                <VariantSelect
                                    category={category}
                                    options={variants}
                                    value={variant[category]}
                                    onSelect={selectVariant.bind(this, category)}
                                />
                            </div>
                        ))
                    }
                    <button className="product-section__atc" type="button" onClick={() => addToCart({ skuId })}>Add To Cart</button>
                </section>
            </main>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
                .product-section {
                    display: flex;
                    background-color: #f2ebd9;
                }

                .product-section__images, .product-section__info {
                    flex: 1 1 50%;
                }

                .product-section__title, .product-section__description, .product-section__price {
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                }

                .product-section__atc {
                    display: block;
                    border: 2px solid black;
                    margin: 15px auto 0;
                    padding: 15px;
                    width: auto;
                    background: white;
                }

                .product-section__atc:hover {
                    background: grey;
                    color: white;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default ProductSection;