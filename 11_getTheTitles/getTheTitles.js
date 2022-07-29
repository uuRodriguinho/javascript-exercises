const getTheTitles = function (name) {
  const books = [
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ];

  let titles = [];
  for (let i = 0; i < name.length; i++) {
    titles.push(books[i].title);
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
