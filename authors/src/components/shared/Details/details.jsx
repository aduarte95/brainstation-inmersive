import React from 'react';
import './details.scss'
import Photo from '../../Photo/photo'
import TitleName from '../TitleName/titleName';

function Details({detailed, photoType, children}) {
  const {imgUrl, name} = detailed;
  return (
    <div className="container author-details">
      <div className="row align-items-center">
        <div className="col text-align-center">
            <Photo photoType={photoType} src={imgUrl} alt={name} />
        </div>
        <div className="col-8">
          <TitleName> {name} </TitleName> 
          {children[0]}
        </div>
      </div>
      
      {children[1] && children[1]}
    </div>
  );
};

export default Details;