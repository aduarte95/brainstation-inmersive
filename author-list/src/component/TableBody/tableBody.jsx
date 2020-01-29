import React from 'react';
import Row from '../Row/row';

const TableBody = ( ({authors}) => {

    let author = authors.map((author, i) => {
        return <Row key={`row-` + i + 1} author={author} />
    });

    return(
        <tbody>
            {author}
        </tbody>
    );
});

export default TableBody;