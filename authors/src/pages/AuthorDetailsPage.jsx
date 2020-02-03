import React from 'react';
import Details from '../components/shared/Details/details';
import { useAuthors } from "../hooks/useAuthors";
import AuthorInfo from '../components/AuthorInfo/authorInfo';
import BookCarousel from '../components/BookCarousel/bookCarousel';


function AuthorDetailsPage({match}) {
  const { getAuthor } = useAuthors();
  const author = getAuthor(match.params.id);

  return (
    <div>{ author &&
      <Details detailed={author} photoType={"authorType"}>
        <AuthorInfo author={author} />
        <BookCarousel authorId={match.params.id} books={author.books} />
      </Details>
    }</div>
  );
};

export default AuthorDetailsPage;