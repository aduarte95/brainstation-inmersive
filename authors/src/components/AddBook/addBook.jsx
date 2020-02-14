import React, { useState } from 'react';
import './addBook.scss';
import { useAuthors } from '../../hooks/useAuthors';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Title from '../shared/Title/title';


function AddBook({match}) {
    const { getAuthor } = useAuthors();
    const [ redirect, setRedirect ] = useState(false);
    const author = getAuthor(match.params.authorId);

    let book = {
            name: '',
            isbn: '',
            imgUrl: '',
            publicationYear: 0,
            genres: '',
            topic: ''
        };

    function handleChange(event) {
        switch (event.target.id) {
            case 'formGroupTitle':
                book.name = event.target.value;
                break;
            
            case 'formGroupIsbn':
                book.isbn = event.target.value;
                break;
            
            case 'formGroupPublicationYear':
                book.publicationYear = event.target.value;
                break;

            case 'formGroupGenre':
                book.genres = event.target.value;
                break;

            case 'formGroupTopic':
                book.topic = event.target.value;
                break;

            case 'formGroupImgUrl':
            book.imgUrl = event.target.value;
            break;
        
            default:
                break;
        }
    }

    function handleSubmit(event) {
        axios.post(`http://localhost:8080/author/${match.params.authorId}`, {  
        name: book.name,
        isbn: book.isbn,
        publicationYear: book.publicationYear,
        genres: book.genres,
        topic: book.topic,
        imgUrl: book.imgUrl,

        }).then( response => {console.log('hi'); setRedirect(true);});
        
        event.preventDefault();
    }


    return (
        <div>{ author &&
            <form className="container form-style">
                    <Title> Add a new book for {author.name} </Title>
                    <div className="form-group">
                        <label htmlFor="formGroupTitle">Title</label>
                        <input type="text" onChange={handleChange} className="form-control" id="formGroupTitle" placeholder="Title" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupIsbn">ISBN</label>
                        <input type="text" onChange={handleChange} className="form-control" id="formGroupIsbn" placeholder="ISBN" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupPublicationYear">Publication year</label>
                        <input type="number" onChange={handleChange} className="form-control" id="formGroupPublicationYear" placeholder="Publication year" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupGenre">Genre</label>
                        <input type="text" onChange={handleChange} className="form-control" id="formGroupGenre" placeholder="Genre" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupTopic">Topic</label>
                        <input type="text" onChange={handleChange} className="form-control" id="formGroupTopic" placeholder="Topic"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupImgUrl">Img url</label>
                        <input type="text" onChange={handleChange} className="form-control" id="formGroupImgUrl" placeholder="Image url"/>
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>  
        }
        { redirect && <Redirect to={`/author/${match.params.authorId}`}/>}
        </div>
    );
};

export default AddBook;