import React from 'react';

const Row = ( ( {author} ) => {
    return(
        <div className="row">{author.name}</div>
    );
});

export default Row;