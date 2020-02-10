import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Title from '../../components/shared/Title/Title';
import './GalleryPage.scss';

//CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0

function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [nasaPhotos, setNasaPhotos] = useState([]);
    
     useEffect(() => {
      const random = [{width: 1, height: 1}, {width: 4, height: 3}]
      const start = new Date();
      var startTemp = new Date();
      var end = startTemp.setDate(startTemp.getDate() - 7);
      var loop = new Date(start);

      while(loop > end) {   
        axios.get(`https://api.nasa.gov/planetary/apod?date=${new Date(loop.getTime() - (start.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]}&api_key=CukV5eprkpPGgtJmS5HYDHXPvyZXExupk716UlB0`)
        .then(  response => {
          if(response.data.media_type !== 'video') {
            setNasaPhotos(oldArray => [...oldArray, {src: response.data.url, ...random[1]}]);   
          }         
        });    

        var newDate = loop.setDate(loop.getDate() - 1);
        loop = new Date(newDate);
      } 
      
    }, []);

    const finalPhotos = nasaPhotos.map((p, index) => ({key: ''+index, ...p}));

    return(
      <div className="container gallery-container">{ nasaPhotos &&
        <div>
          <Title> Nasa's photos of the week </Title>

          <div className="gallery-container__photos">
            <Gallery photos={finalPhotos} onClick={openLightbox}/>
          </div>

          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={finalPhotos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      }</div>
    )
}

export default GalleryPage;