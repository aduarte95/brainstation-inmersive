import React from 'react';
import './photo.scss'

function Photo({src, alt}) {

    return (
        <img className="photo" src={src} alt={alt}/>
      );
};

export default Photo;