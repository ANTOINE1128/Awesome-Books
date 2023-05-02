// const body = document.querySelector('.body');
// const booksSection = document.querySelector('.books');
// const form = document.querySelector('#form');
// const title = document.querySelector('#book-title');
// const author = document.querySelector('#author');

// // get books from local storage if any

// let books = [];

// const getBooks = () => {
//   let savedBooks = [];
//   if (localStorage.getItem('books')) {
//     savedBooks = JSON.parse(localStorage.getItem('books'));
//   }
//   return savedBooks;
// };

// books = getBooks();

// // display books from local storage

// const showBooks = () => {
//   books = getBooks();
//   booksSection.innerHTML = '';
//   books.forEach((book, index) => {
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('book');
//     bookDiv.innerHTML = `
//       <h3>${book.title}</h3>
//       <p>${book.author}</p>
//       <button data-index="${index}" class="btn-btn-danger delete">Delete</button>
//     `;
//     booksSection.appendChild(bookDiv);
//   });

//   const rBook = document.querySelectorAll('.delete');

//   rBook.forEach((remove) => {
//     remove.addEventListener('click', removeBook);
//   });
// };

// showBooks();

// // add book to local storage

// const addBook = (book) => {
//   getBooks();
//   books.push(book);
//   localStorage.setItem('books', JSON.stringify(books));
//   showBooks();
// };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const book = {
//     index: books.length + 1,
//     title: title.value,
//     author: author.value,
//   };
//   addBook(book);
// });

// function removeBook(event) {
//   const { index } = event.target.dataset;
//   getBooks();
//   books = books.filter((book, i) => i !== Number(index));
//   localStorage.setItem('books', JSON.stringify(books));
//   showBooks();
// }
