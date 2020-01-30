import React from 'react';
import './search.scss'

const Search = ({ actions }) => {

    const onChange = value => {
        actions.findAuthor(value);
    };

    return(
        <div className="md-form mt-0 search">
            <input 
            className="form-control" 
            type="text" 
            placeholder="Search" 
            aria-label="Search" 
            onChange={(event) => onChange(event.target.value)}/>
        </div>
    );
    
};

export default Search;

/*
const Search = ( () => {
    
    return(
        <div class="md-form mt-0 margin">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
    );
});

export default Search;*/