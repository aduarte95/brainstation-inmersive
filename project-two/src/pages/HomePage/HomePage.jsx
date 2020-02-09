import React from 'react';
import SolarSystemContainer from '../../components/SolarSystemContainer/SolarSystemContainer';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import Title from '../../components/shared/Title/Title';
import InfoChart from '../../components/shared/InfoChart/InfoChart';

function HomePage({match}) {
  
  return (
    <div className="home-container">
      <Title> Our Solar System
          <span>
              <img className="home-container__title-img" src="https://img.icons8.com/plasticine/100/000000/rocket.png"/>
          </span>
      </Title>

      <InfoChart className="home-container__info-chart">
        Hey! Pick any member of the solar system and learn something cool about it!
      </InfoChart>}

      <SolarSystemContainer />

      <Link className="test-me-button btn home-container__float-btn glowing-box glowing-button" to="test-me"> Test me up! </Link>
    </div> 
  );
}

export default HomePage;
