import React from 'react';
import Details from '../components/shared/Details/details';
import { useAuthors } from "../hooks/useAuthors";
import AuthorInfo from '../components/AuthorInfo/authorInfo';
import BookCarousel from '../components/BookCarousel/bookCarousel';


function AuthorDetailsPage({match}) {
  const { getAuthor } = useAuthors();
  const author = getAuthor(match.params.id);

  const books = [
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    "https://i.pinimg.com/236x/ae/f4/e2/aef4e2296f78750e5daab650d47eec48--brave-new-world-huxley-brave-new-world-book.jpg",
    ]

  return (
    <Details detailed={author}>
      <AuthorInfo author={author} />
      <BookCarousel books={books} />
    </Details>
  );
};

export default AuthorDetailsPage;