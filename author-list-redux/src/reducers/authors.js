import authorsList from '../authorList.json'

const authors = (state = authorsList, action) => {
  switch (action.type) {
    case "FIND_AUTHOR":
      return [...authorsList.filter( ({name}) => name.includes(action.searchValue)) ]
    default:
      return state;
  }
};

export default authors;
