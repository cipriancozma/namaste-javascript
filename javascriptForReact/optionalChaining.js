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
    reviewCount: 20,
  },
];

function getTotalReviewCount(book) {
  return data[book]?.reviewCount ?? 0;
}

console.log(getTotalReviewCount(3));
