const newBook = {
  title: "Book",
  author: "Author",
  pages: 900,
};

const { pages } = newBook;

const result = pages > 800 ? "over 800" : " less than 800";

console.log(`The book has ${result} pages.`);
