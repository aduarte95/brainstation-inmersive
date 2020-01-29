import React from 'react';
import Header from '../../component/Header/header'
import TableBody from '../TableBody/tableBody';

const Table = ( ({headers, authors, searchValue}) => {

    return(
        <table className="table">
            <Header headers={headers}/>
            <TableBody authors={authors} />
        </table>
    );
});

export default Table;