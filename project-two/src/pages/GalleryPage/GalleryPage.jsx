import React, { useState, useEffect } from 'react';
import axios from 'axios';

//CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0

function GalleryPage() {
    const [nasaPhotos, setNasaPhotos] = useState([]);
    let photosArray = [];
    useEffect(() => {
        axios.get( )
        .then(  response => {
            response.map( imgSrc => {
                photosArray.push(imgSrc);
            })
            setNasaPhotos(photosArray);  
        })   
      }, []);

    return(
            <div> { nasaPhotos && 
                <img src={nasaPhotos} alt=""/>
                }
            </div>
    )
}

export default GalleryPage;