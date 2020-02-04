import React from 'react';
import Details from '../components/shared/Details/details';
import { useAuthors } from "../hooks/useAuthors";
import AuthorInfo from '../components/AuthorInfo/authorInfo';
import BookCarousel from '../components/BookCarousel/bookCarousel';
import { Link } from 'react-router-dom';


function AuthorDetailsPage({match}) {
  const { getAuthor } = useAuthors();
  const author = getAuthor(match.params.id);

  return (
    <div>{ author &&
      <Details detailed={author} photoType={"authorType"}>
        <AuthorInfo author={author} />
        <BookCarousel authorId={match.params.id} books={author.books} />
        <Link to={`/author/${author.id}/add-book`} className="link link-special d-flex justify-content-center align-items-center">
          <div className="btn btn-success add-book-btn">+ Add Book</div>
        </Link>                    
      </Details>
    }</div>
  );
};

export default AuthorDetailsPage;