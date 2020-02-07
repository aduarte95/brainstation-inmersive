import React from 'react';
import SolarSystemContainer from '../../components/SolarSystemContainer/SolarSystemContainer';
import { Link } from 'react-router-dom';
import './HomePage.scss';

function HomePage({match}) {
  
  return (
    <div>
      <SolarSystemContainer />
          <Link className="test-me-button btn btn-success float" to="test-me"> Test me up! </Link>
      
    </div> 
  );
}

export default HomePage;
