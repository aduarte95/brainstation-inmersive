import React, { useState, useEffect } from 'react';
import Title from '../../components/shared/Title/Title';
import coolSitesData from '../../data/coolSites.json'
import './CoolSitesPage.scss';
import {Card, OverlayTrigger, Tooltip} from 'react-bootstrap'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CoolSitesPage() {
  const [coolSites, setCoolSites] = useState([]);

  useEffect(() => {
      setCoolSites(coolSitesData)
  }, []);

  return (
    <div className="cool-sites-container container">
        <Title>Here are some sites you will love! <i className="fas fa-heart"></i> </Title>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            className="cool-sites-container__carousel"
            >
                
                {   coolSites &&
                coolSites.map( (site, i) => {
                    return <Card className="cool-sites-container__card glowing-box" key={`carousel-item-${i}`} style={{ width: '18rem' }}>
                                <Card.Img className="cool-sites-container__img" variant="top" src={site.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{site.name}</Card.Title>
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip>
                                                {site.description}
                                            </Tooltip>
                                        }
                                        >
                                        <Card.Text  className="cool-sites-container__text">{site.description}</Card.Text>
                                    </OverlayTrigger>
                                    <a 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    href={site.url} 
                                    variant="primary">
                                        Go to page
                                        </a>
                                </Card.Body>
                            </Card>
                })
            }
            </Carousel>
    </div> 
  );
}

export default CoolSitesPage;


/*
import React, { useState, useEffect } from 'react';
import {Carousel} from 'react-bootstrap';
import Title from '../../components/shared/Title/Title';
import coolSitesData from '../../data/coolSites.json'
import './CoolSitesPage.scss'
import { Link } from 'react-router-dom';

function CoolSitesPage() {
  const [coolSites, setCoolSites] = useState([]);

  useEffect(() => {
      setCoolSites(coolSitesData)
  }, []);

  return (
    <div className="container cool-sites-container">
        <Title>Here are some sites you will love! <i className="fas fa-heart"></i> </Title>
        <Carousel>
            {   coolSites &&
                coolSites.map( (site, i) => {
                    return <Carousel.Item key={`carousel-item-${i}`} className="cool-sites-container__carousel-item">
                                <a target="_blank" rel="noopener noreferrer" href={site.url}>
                                    <img
                                    className="d-block w-100 cool-sites-container__img"
                                    src={site.imgUrl}
                                    alt={site.name}
                                    />
                                </a>
                                <Carousel.Caption>
                                    <h3>{site.name}</h3>
                                    <p>{site.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                })
            }
        </Carousel>
    </div> 
  );
}

export default CoolSitesPage;
 */