import React from 'react';
import './SolarSystemContainer.scss';
import {Link} from 'react-router-dom';
import { useSolarSystem } from '../../hooks/useSolarSystem';
import Title from '../shared/Title/Title';

function SolarSystemContainer() {
    const { solarSystem } = useSolarSystem();
    
  return (   
            <div className="ss-container">
                <Title> Our Solar System
                    <span>
                        <img className="ss-container__title-img" src="https://img.icons8.com/plasticine/100/000000/rocket.png"/>
                    </span>
                </Title>
                <div className="d-flex">
                    {solarSystem.map( (member, i) => {
                            return  <div className={"ss-container__" + member.name + " d-flex align-items-center"} key={`member-${i}`}>
                                        <Link to={`/solar-system-member/${member.id}`}>
                                            {
                                                member.name !== 'sun' &&
                                                <img className="ss-container__inner-img ss-container__planet" alt={member.name} src={member.imgUrl}/>
                                            }
                                            {
                                                member.name === 'sun' &&
                                                <img className="ss-container__inner-img ss-container__member-sun" alt={member.name} src={member.imgUrl}/>
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
