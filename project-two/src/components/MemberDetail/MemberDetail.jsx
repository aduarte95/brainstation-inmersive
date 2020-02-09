import React, { useState, useEffect } from 'react';
import './MemberDetail.scss';
import { useSolarSystem } from '../../hooks/useSolarSystem';
import TopImage from '../TopImage/TopImage';
import DidYouKnow from '../DidYouKnow/DidYouKnow';
import InfoChart from '../shared/InfoChart/InfoChart';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Title from '../shared/Title/Title';
import { useFacts } from '../../hooks/useFacts';

function MemberDetail({match}) {
    const { getMember } = useSolarSystem();
    const member = getMember(match.params.id);
    const { totalFacts, cont, setCont } = useFacts(member);
      
  return (   
            <div className="container-fluid member-container">
                { member &&
                    <div>
                        <Title>{member.name}</Title>
                        <CSSTransitionGroup
                            transitionName="home-container__info-chart"
                            transitionAppear={true}
                            transitionAppearTimeout={10000}
                            transitionEnter={false}
                            transitionLeave={false}>
                                <div className="member-container__info">
                                    <InfoChart className="member-container__info-chart">
                                        Click the star and start to learn about <span className="capitalize">{member.name}</span>
                                    </InfoChart>
                                    
                                </div>
                        </CSSTransitionGroup>
                        <TopImage member={member}/>
                        <DidYouKnow member={member} totalFacts={totalFacts} setCont={setCont} cont={cont}/>
                        
                    </div>
                }
            </div>
  );
}

export default MemberDetail;
