class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `The title of the ebook is: ${this.title} and the size is ${this.fileSize}`;
  }
}

const ebook_1 = new Ebook("Book_1", "CC", "2024", "126mb");
