import React from 'react';

const Header = ( ({headers}) => {
    let header = headers.map((header, i) => {
        return <th key={i} scope="col">{header}</th>
    });

    return(
        <thead>
            <tr>
                {header}
            </tr>
        </thead>
    );
});

export default Header;