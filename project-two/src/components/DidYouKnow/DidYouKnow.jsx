import React from 'react';
import './DidYouKnow.scss';
import Subtitle from '../shared/Subtitle/Subtitle';
import Card from '../Card/Card';

function DidYouKnow({member}) {
      console.log(member)
  return (   
            <div>     
              <Subtitle>Did you know?</Subtitle>
              <Card facts={member.facts}></Card>
            </div>
  );
}

export default DidYouKnow;
