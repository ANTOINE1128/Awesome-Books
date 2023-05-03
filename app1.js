class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }

  getBooks() {
    let savedBooks = [];
    if (localStorage.getItem('books')) {
      savedBooks = JSON.parse(localStorage.getItem('books'));
    }
    this.books = savedBooks;
    return savedBooks;
  }

  showBooks() {
    this.getBooks();
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button data-index="${index}" class="btn-btn-danger delete">Delete</button></td>
      `;
      bookList.appendChild(row);
    });

    const rBook = document.querySelectorAll('.delete');

    rBook.forEach((remove) => {
      remove.addEventListener('click', this.removeBook);
    });
  }

  addBook(book) {
    this.getBooks();
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook = (event) => {
    const { index } = event.target.dataset;
    this.getBooks();
    this.books = this.books.filter((book, i) => i !== Number(index));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  };
}

const form = document.querySelector('#form');
const title = document.querySelector('#book-title');
const author = document.querySelector('#author');
const btn2 = document.querySelector('.btn-secondary');

const book = new Book();

book.showBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  book.addBook(newBook);
  form.reset();
});

btn2.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  book.addBook(newBook);
  form.reset();
});

const listNav = document.querySelector('.list');
const addNav = document.querySelector('.add');
const contactNav = document.querySelector('.contact-nav');

const contact = document.querySelector('.contact-div');
const books = document.querySelector('.books');
const addBook = document.querySelector('.add-book');

const showContact = () => {
  contact.style.display = 'block';
  books.style.display = 'none';
  addBook.style.display = 'none';
};

const showBooks = () => {
  contact.style.display = 'none';
  books.style.display = 'block';
  addBook.style.display = 'none';
};

const showAddBook = () => {
  contact.style.display = 'none';
  books.style.display = 'none';
  addBook.style.display = 'block';
};

listNav.addEventListener('click', showBooks);
addNav.addEventListener('click', showAddBook);
contactNav.addEventListener('click', showContact);
