import React from 'react';
import './MemberDetail.scss';
import { useSolarSystem } from '../../hooks/useSolarSystem';
import TopImage from '../TopImage/TopImage';
import DidYouKnow from '../DidYouKnow/DidYouKnow';

function MemberDetail({match}) {
    const { getMember } = useSolarSystem();
    const member = getMember(match.params.id);
      
  return (   
            <div className="container-fluid member-container">
                { member &&
                    <div>
                        <TopImage member={member}/>
                        <DidYouKnow member={member}/>
                    </div>
                }
            </div>
  );
}

export default MemberDetail;
