import { useState , useEffect } from "react";
import axios from "axios";

export const useAuthors = () => {
    const [authors, setAuthors] = useState([]);
  
    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
        console.log(response);
        setAuthors(response.data.results);
      });    
    }, []);

    const getAuthor = (id) => {
      return authors.filter(author => author.name === id );
    };

    return {
      authors, 
      getAuthor
    };
  };