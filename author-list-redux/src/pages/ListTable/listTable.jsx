import React from 'react';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getColumn(value) {
    let valueToShow = value;

    if(Array.isArray(valueToShow)) {
        valueToShow = valueToShow.map(({name, code, publishedYear}, i) => {
            const date = new Date(publishedYear);
            const title='ISBN: '.concat(code).concat('\n').concat('Published Year: ').concat(months[date.getMonth()])
            .concat(' ').concat(date.getDay()).concat(', ').concat(date.getFullYear());
            return  <li key={i} title={title}> {name} </li>
        })

        valueToShow = <ul> {valueToShow} </ul>;
    } 
    return valueToShow
}

const ListTable = ( ({authorsData}) => {
    let headers = ['Name', 'BornDate', 'Books'];
    let header = headers.map((header, i) => {
        return <th key={i} scope="col">{header}</th>
    });
    console.log(authorsData);
    let author = authorsData.map(({name, bornDate, books}, i) => {
        return <tr key={`row-` + i + 1}>
            <td>
                {getColumn(name)}
            </td>
            <td>
                {getColumn(bornDate)}
            </td>
            <td>
                {getColumn(books)}
            </td>
    </tr>
    });

    return(
        <table className="table">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {author}
            </tbody>
        </table>
    );
});

export default ListTable;

