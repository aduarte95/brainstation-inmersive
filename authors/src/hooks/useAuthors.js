import { useState , useEffect } from "react";
import axios from "axios";

export const useAuthors = () => {
    const [authors, setAuthors] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:3000/api/v1/author").then(response => {
      setAuthors(response.data);
      });    
    }, []);

    const getAuthor = (id) => {
      return authors.find(author => author.id === id );
    };

    const getAuthorBook = (authorId, bookId) => {
      const author = authors.find(author => author.id === authorId);

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