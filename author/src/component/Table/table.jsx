import React from 'react';
import Header from '../../component/Header/header'
import Row from '../../component/Row/row'

const Table = ( ({headers, authors}) => {
   /* let rows=[];
    rows.push(<Header headers={headers}/>);

    for(var i = 0; i < authors.length; i++) {
        rows.push(
            <Row author={authors[i]}/>
        );
    }*/

    let authorList = authors.map( (author, i) => {
        return <Row key={i} author={author}/>
    })

    return(
        <div>
            <Header headers={headers}/>
            {authorList}
        </div>
    );
});

export default Table;