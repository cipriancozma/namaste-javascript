const data = [
  {
    id: 1,
    title: "Book-1",
    author: "Author-1",
  },
  {
    id: 2,
    title: "Book-2",
    author: "Author-2",
  },
  {
    id: 3,
    title: "Book-3",
    author: "Author-3",
  },
  {
    id: 4,
    title: "Book-4",
    author: "Author-4",
  },
  {
    id: 5,
    title: "Book-5",
    author: "Author-5",
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((el) => el.id === id);
}

const books = getBooks();

const book = getBook(2);

// Destructuring object
const { title, author } = book;
