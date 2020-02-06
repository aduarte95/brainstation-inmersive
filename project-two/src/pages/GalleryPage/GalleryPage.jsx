import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from "react-photo-gallery";

//CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0

export const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
      width: 4927,
      height: 1000
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];


function GalleryPage() {
    const [nasaPhotos, setNasaPhotos] = useState([]);

    const start = new Date();
    var startTemp = new Date();
    var end = startTemp.setDate(startTemp.getDate() - 5);
    var loop = new Date(start);
    const photosArray = []; 
    const dates=[];

    while(loop > end){  
      dates.push(loop)
      var newDate = loop.setDate(loop.getDate() - 1);
      loop = new Date(newDate);
    }

    console.log(dates)

    useEffect(() => {

      Promise.all(dates.map(date => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${new Date(date.getTime() - (start.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]}&api_key=CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0`)
        .then(  response => {
            photosArray.push({src: response.data.url, width:1, height:1})
            //response.data.map( img => photosArray.push({src: img.url, width:4, height:3}))
            setNasaPhotos(photosArray);}
        );
        console.log(nasaPhotos)
      }))

      /*
    
      while(loop > end){    
          axios.get(`https://api.nasa.gov/planetary/apod?date=${new Date(loop.getTime() - (start.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]}&api_key=CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0`)
        .then(  response => {
            photosArray.push({src: response.data.url, width:1, height:1})
            nasaPhotos.push({src: response.data.url, width:1, height:1})
             console.log(nasaPhotos)
            setNasaPhotos(nasaPhotos);
            //response.data.map( img => photosArray.push({src: img.url, width:4, height:3}))
            
        });    


        var newDate = loop.setDate(loop.getDate() - 1);
        loop = new Date(newDate);
      } 
      console.log(nasaPhotos)*/
       
    }, []);


/*
    useEffect(() => {
      let ids = Array.from({length: 10}, (v, k) => k+1)

      Promise.all(ids.map(id => this.getCharacter(id)))
    }
    
      while(loop > end){    
          axios.get(`https://api.nasa.gov/planetary/apod?date=${new Date(loop.getTime() - (start.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]}&api_key=CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0`)
        .then(  response => {
            photosArray.push({src: response.data.url, width:1, height:1})
            nasaPhotos.push({src: response.data.url, width:1, height:1})
             console.log(nasaPhotos)
            setNasaPhotos(nasaPhotos);
            //response.data.map( img => photosArray.push({src: img.url, width:4, height:3}))
            
        });    


        var newDate = loop.setDate(loop.getDate() - 1);
        loop = new Date(newDate);
      } 
      console.log(nasaPhotos)
       
    }, []);

  */  

    return(
        <Gallery photos={nasaPhotos} />

    )
}

export default GalleryPage;