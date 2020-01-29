import React from 'react';

const Header = ( ({headers}) => {
    let rows=[];

    for(var i = 0; i < headers.length; i++) {
        rows.push(
            <div className="col" key={i}> {headers[i]} </div>
        );
    }
 
    return(rows);
});

export default Header;