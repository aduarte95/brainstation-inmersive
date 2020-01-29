import React from 'react';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Column = ( {value} ) => {
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

    return(
        <td>
            {valueToShow}
        </td>
    );
};

export default Column;