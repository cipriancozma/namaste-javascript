const data = [
  {
    id: 1,
    title: "Book-1",
    author: "Author-1",
    genres: ["science fiction", "humor", "short stories", "fantasy"],
  },
  {
    id: 2,
    title: "Book-2",
    author: "Author-2",
    genres: ["science fiction", "humor", "short stories"],
  },
  {
    id: 3,
    title: "Book-3",
    author: "Author-3",
    genres: ["science fiction", "humor", "fantasy"],
  },
  {
    id: 4,
    title: "Book-4",
    author: "Author-4",
    genres: ["science fiction", "fantasy"],
  },
  {
    id: 5,
    title: "Book-5",
    author: "Author-5",
    genres: ["science fiction", "humor"],
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
const { title, author, genres } = book;

// Destructuring array

const [primaryGenre, secondaryGenre] = genres;
