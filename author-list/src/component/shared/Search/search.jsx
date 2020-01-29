import React from 'react';
import './search.scss'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    onClick() {
        const value = "test";
        this.setState({
            searchValue: value
        })
        this.props.handler(value);
    }

    render(){
        return(
            <div className="md-form mt-0 margin">
                <input 
                className="form-control" 
                type="text" 
                placeholder="Search" 
                aria-label="Search" 
                onChange={(event) => this.props.handler(event.target.value)}/>
            </div>
        );
    }
}

/*
const Search = ( () => {
    
    return(
        <div class="md-form mt-0 margin">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
    );
});

export default Search;*/