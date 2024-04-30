const data = [
  {
    id: 1,
    title: "Book-1",
    author: "Author-1",
    genres: ["science fiction", "humor", "short stories", "fantasy"],
    hasMovieAdaptation: true,
  },
  {
    id: 2,
    title: "Book-2",
    author: "Author-2",
    genres: ["science fiction", "humor", "short stories"],
    hasMovieAdaptation: true,
  },
  {
    id: 3,
    title: "Book-3",
    author: "Author-3",
    genres: ["science fiction", "humor", "fantasy"],
    hasMovieAdaptation: true,
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
    hasMovieAdaptation: false,
    translations: false,
    reviewCount: 0,
  },
];

const getBook = (idx) => {
  return data[idx];
};

const { hasMovieAdaptation } = getBook(2);
const { translations, reviewCount } = getBook(4);

const result = hasMovieAdaptation && "This book has adaptation";
const hasTranslation = translations || "NOT TRANSLATED";
const wrongCount = reviewCount || "No data"; // No data -> treated as falsy value
const correctCount = reviewCount ?? "No data"; // 0 -> nullish coalescing
