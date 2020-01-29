import React from 'react';
import Table from '../Table/table';
import Search from '../shared/Search/search';

export default class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
    }

    handler = (val) => {
        this.setState({
            searchValue: val
          })
    }

    render(){
        return(
            <div>
                <Search handler={this.handler} searchValue={this.state.searchValue}></Search>
                <Table headers={this.props.headers} authors={this.props.authors} searchValue={this.state.searchValue}/>
            </div>
        );
    }
}

/*
const ListTable = ( ({headers, authors}) => {
    
    return(
        <div>
            <Search></Search>
            <Table headers={headers} authors={authors}/>
        </div>
    );
});

export default ListTable;*/