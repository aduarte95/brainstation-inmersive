import React from 'react';
import Column from '../Column/column';

const Row = ( ({author}) => {
    const {name,bornDate, books} = author;
    
    return(
        <tr>
            <Column value={name} />
            <Column value={bornDate} />
            <Column value={books} />
        </tr>
    );
});

export default Row;