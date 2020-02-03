import React from 'react';
import Details from '../components/shared/Details/details';
import { useAuthors } from '../hooks/useAuthors';
import BookInfo from '../components/BookInfo/bookInfo';


function BookDetailsPage({match}) {
  const { getAuthorBook } = useAuthors();
  const book = getAuthorBook(match.params.id);

  return (
    <Details detailed={book}>
      <BookInfo book={book} />
    </Details>  
  );
};

export default BookDetailsPage;