import React from 'react';
import './TopImage.scss';

function TopImage({member}) {
      
  return (   
            <div className="row justify-content-center">
                <img className="member-container__img" src={member.imgUrl} alt={member.name}/>
            </div>
  );
}

export default TopImage;
