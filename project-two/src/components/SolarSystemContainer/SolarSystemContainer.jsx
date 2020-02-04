import React, { useState, useEffect } from 'react';
import './SolarSystemContainer.scss';
import {Link} from 'react-router-dom';
import solarSystemData from '../../data/solarSystem';

function SolarSystemContainer() {
    const [solarSystem, setSolarSystem] = useState([]);
    useEffect(() => {
        setSolarSystem(solarSystemData);    
      }, []);
      
  return (
        <div className="container">
            {solarSystem.map( (member, i) => {
                    return  <div className="col"> 
                                <img src={member.imgUrl} key={`member-${i}`} className={member.name}></img>
                            </div>
                }
            )}
        </div>
  );
}

export default SolarSystemContainer;
