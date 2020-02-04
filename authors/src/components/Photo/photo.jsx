import React from 'react';
import './photo.scss'

function Photo({photoType, src, alt}) {

    return (
        <img className={photoType + " photo-style"} src={src} alt={alt}/>
      );
};

export default Photo;