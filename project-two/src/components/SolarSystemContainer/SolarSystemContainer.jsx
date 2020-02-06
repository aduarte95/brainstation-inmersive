import React from 'react';
import './SolarSystemContainer.scss';
import {Link} from 'react-router-dom';
import { useSolarSystem } from '../../hooks/useSolarSystem';
import Title from '../shared/Title/Title';

function SolarSystemContainer() {
    const { solarSystem } = useSolarSystem();
    
  return (   
            <div>
                <Title> Our Solar System
                    <span>
                        <img src="https://img.icons8.com/plasticine/100/000000/rocket.png"/>
                    </span>
                </Title>
                <div className="d-flex">
                    {solarSystem.map( (member, i) => {
                            return  <div className={member.name + " d-flex align-items-center"} key={`member-${i}`}>
                                        <Link to={`/solar-system-member/${member.id}`}>
                                            {
                                                member.name !== 'sun' &&
                                                <img className="img-size planet" alt={member.name} src={member.imgUrl}/>
                                            }
                                            {
                                                member.name === 'sun' &&
                                                <img className="img-size member-sun" alt={member.name} src={member.imgUrl}/>
                                            }
                                
                                        </Link>
                                    </div>
                                    
                        }
                    )}
                </div>
            </div>
  );
}

export default SolarSystemContainer;
