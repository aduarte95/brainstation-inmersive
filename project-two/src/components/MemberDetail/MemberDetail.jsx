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

                        <div className="member-container__info">
                            <InfoChart className="member-container__info-chart">
                                Click the star and discover amazing facts about <span className="member-container__member-name">{member.name}</span>
                            </InfoChart>
                        </div>

                        <TopImage member={member}/>

                        <DidYouKnow member={member} totalFacts={totalFacts} setCont={setCont} cont={cont}/>
                    </div>
                }
            </div>
  );
}

export default MemberDetail;
