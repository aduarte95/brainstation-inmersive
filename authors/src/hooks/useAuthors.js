import { useState , useEffect } from "react";
import axios from "axios";

export const useAuthors = () => {
    const [authors, setAuthors] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8080/author").then(response => {
      setAuthors(response.data);
      });    
    }, []);

    const getAuthor = (id) => {
      return authors.find(author => author.id === Number(id) );
    };

    const getAuthorBook = (authorId, bookId) => {
      const author = authors.find(author => author.id === Number(authorId) );

      if(author) {
        return author.books.find(book => book.id === Number(bookId));
      } else {
        return author;
      }
    }

  return {
    authors, 
    getAuthor,
    getAuthorBook,
  }
  };