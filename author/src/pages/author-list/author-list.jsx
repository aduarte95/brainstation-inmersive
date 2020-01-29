import React from 'react';
import Table from '../../component/Table/table'

export default class AuthorList extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: [
                {
                id: 1,
                name: 'Brave World',
                books: 
                    [
                        {
                            id: 1,
                            name: 'Brave World',
                            code: 'as',
                            publishedYear: '2012-04-23T18:25:43.511Z'
                        }
                    ],
                bornDate: '2012-04-23T18:25:43.511Z'
            }],
            headers: ['Name', 'BornDate']
        };

    }

    render(){
        return(<div>
            <Table headers={this.state.headers} authors={this.state.authors}/>
        </div>);
    }
}
/*
    return (
        <div className="card">
            <CharacterDetails character={ this.state.character }></CharacterDetails>
    
</div>

    )*/