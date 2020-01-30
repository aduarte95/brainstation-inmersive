export const findAuthor = searchValue => {
  console.log(searchValue);

  return {
    type: "FIND_AUTHOR",
    searchValue
  };
};
