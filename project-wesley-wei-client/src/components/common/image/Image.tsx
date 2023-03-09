import React from 'react';

interface IImage {
    src: string;
}

const Image: React.FC<IImage> = ({src}) => {
    return (
        <img src={`/assets/${src}`} alt="" />
    )
};

export default Image;