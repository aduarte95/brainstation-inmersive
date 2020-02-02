import React from 'react';
import AuthorDetails from '../components/AuthorDetails/authorDetails';

function AuthorDetailsPage({match}) {

    return (
        <AuthorDetails id={match.params.id}/>
      );
};

export default AuthorDetailsPage;