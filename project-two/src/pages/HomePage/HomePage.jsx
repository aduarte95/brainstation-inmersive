import React from 'react';
import SolarSystemContainer from '../../components/SolarSystemContainer/SolarSystemContainer';
import { Link } from 'react-router-dom';

function HomePage({match}) {
  
  return (
    <div>
      <SolarSystemContainer />
        <div className="d-flex justify-content-end px-3 py-3">
          <Link className="test-me-button btn btn-success" to="test-me"> Test me up! </Link>
        </div>
    </div> 
  );
}

export default HomePage;
