import React from 'react';
import Title from '../../component/shared/Title/title';
import ListTable from '../../component/ListTable/listTable';

export default class AuthorList extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: 
            [
                {
                    id: 1,
                    name: 'Aldous Huxley',
                    books: 
                        [
                            {
                                id: 1,
                                name: 'Brave World',
                                code: '908',
                                publishedYear: '2012-04-23T18:25:43.511Z'
                            }
                        ],
                    bornDate: '2012-04-23T18:25:43.511Z'
                },
                {
                    id: 2,
                    name: 'George Orwell',
                    books: 
                        [
                            {
                                id: 1,
                                name: '1984',
                                code: 'A098',
                                publishedYear: '2012-04-23T18:25:43.511Z'
                            },
                            {
                                id: 2,
                                name: 'Animal Farm',
                                code: 'A068',
                                publishedYear: '2012-04-23T18:25:43.511Z'
                            }
                        ],
                    bornDate: '2012-04-23T18:25:43.511Z'
                }
            ],
            headers: ['Name', 'BornDate', 'Books']
        };

    }

    render(){
        return(
        <div className="container">
            <Title title="Lista de Autores"/>
            <ListTable headers={this.state.headers} authors={this.state.authors}></ListTable>
        </div>);
    }
}