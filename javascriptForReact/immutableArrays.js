const data = [
  {
    id: 1,
    title: "Book-1",
    author: "Author-1",
    genres: ["science fiction", "humor", "short stories", "fantasy"],
    hasMovieAdaptation: true,
    pages: 420,
  },
  {
    id: 2,
    title: "Book-2",
    author: "Author-2",
    genres: ["science fiction", "humor", "short stories"],
    hasMovieAdaptation: true,
    pages: 388,
  },
  {
    id: 3,
    title: "Book-3",
    author: "Author-3",
    genres: ["science fiction", "humor", "fantasy"],
    hasMovieAdaptation: true,
    pages: 510,
  },
  {
    id: 4,
    title: "Book-4",
    author: "Author-4",
    genres: ["science fiction", "fantasy"],
    pages: 299,
  },
  {
    id: 5,
    title: "Book-5",
    author: "Author-5",
    genres: ["science fiction", "humor"],
    hasMovieAdaptation: false,
    translations: false,
    reviewCount: 20,
    pages: 601,
  },
];

function getBooks() {
  return data;
}
const books = getBooks();

// Add a book to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Delete a book from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

console.log(booksAfterDelete);

// Update book object in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1
    ? {
        ...book,
        title: "Harry Potter and the Philosopher Stone",
      }
    : book
);

console.log(booksAfterUpdate);
