import React from 'react';

const ImageOne = () => {
  const imageUrl = 'https://placehold.co/600x400/000000/FFFFFF/png';

  return (
    <img src={imageUrl} alt="Image One" className="image" />
  );
};

export default ImageOne;
