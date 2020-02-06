import React from 'react';
import './SolarSystemContainer.scss';
import {Link} from 'react-router-dom';
import { useSolarSystem } from '../../hooks/useSolarSystem';

function SolarSystemContainer() {
    const { solarSystem } = useSolarSystem();
    
  return (   
            <div className="d-flex">
                {solarSystem.map( (member, i) => {
                        return  <div className={member.name + " d-flex align-items-center"} key={`member-${i}`}>
                                    <Link to={`/solar-system-member/${member.id}`}>
                                        <img className="img-size planet" alt={member.name} src={member.imgUrl}/>
                                    </Link>
                                </div>
                                
                    }
                )}
            </div>
  );
}

export default SolarSystemContainer;
