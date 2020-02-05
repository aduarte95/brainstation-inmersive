import React from 'react';
import SolarSystemContainer from '../components/SolarSystemContainer/SolarSystemContainer';
import { Link } from 'react-router-dom';

function HomePage({match}) {
  
  return (
    <div>
      <SolarSystemContainer />
      <div className="d-flex justify-content-end">
        <Link className="btn btn-success" to="testMeUp"> Test me up! </Link>
      </div>
    </div>  
  );
}

export default HomePage;
