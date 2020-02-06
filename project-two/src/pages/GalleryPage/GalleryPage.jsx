import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';


//CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0

function GalleryPage() {
    const [nasaPhotos, setNasaPhotos] = useState([]);
    const random = [{width: 1, height: 1}, {width: 4, height: 3}]
    const start = new Date();
    var startTemp = new Date();
    var end = startTemp.setDate(startTemp.getDate() - 7);
    var loop = new Date(start);

     useEffect(() => {
    
      while(loop > end) {   
        axios.get(`https://api.nasa.gov/planetary/apod?date=${new Date(loop.getTime() - (start.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]}&api_key=CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0`)
        .then(  response => {
          if(response.data.media_type !== 'video') {
            setNasaPhotos(oldArray => [...oldArray, {src: response.data.url, ...random[index]}]);   
          }         
        });    

        var newDate = loop.setDate(loop.getDate() - 1);
        loop = new Date(newDate);
      } 
      
    }, []);

    const finalPhotos = nasaPhotos.map((p, index) => ({key: ''+index, ...p}));

    return(
      <div>{ nasaPhotos &&
        <Gallery photos={finalPhotos} />
        // <Gallery photos={nasaPhotos} />
      }</div>

    )
}

export default GalleryPage;