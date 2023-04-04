import React from 'react';

const ImageList = ({images}) => (
    <>
        <ul className="image-list">
            {images.map(
                image => (
                    <li key={image.src} className="image-list__item">
                        <img className="image-list__image" {...image} />
                    </li>
                    
                )
            )}
        </ul>
        <style jsx>{`
            .image-list {
                margin: 0;
                padding: 15px;
                list-style-type: none;
            }

            .image-list__item {
                position: relative;
                margin-bottom: 15px;
                width: 100%;
                padding-bottom: 100%;
            }


            .image-list__item:last-child {
                margin-bottom: 0;
            }

            .image-list__image {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                background-color: grey;
            }
        `}</style>
    </>
);

export default ImageList;