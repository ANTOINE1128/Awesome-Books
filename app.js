const body = document.querySelector('.body');
const booksSection = document.querySelector('.books');

// create an object for books
const bookObj = {
  books: [
    {
      bookRank: 1,
      title: 'firstbook',
      author: 'antoine'
    },
    {
      bookRank: 2,
      title: 'secondbook',
      author: 'victor'
    }
  ]
};

// create the book section
// let bookHtml = '';

// bookObj.books.forEach(book => {
//   const html = `
//     <div class="book">
//       <h3>${book.title}</h3>
//       <p>${book.author}</p>
//       <button class="${book.bookRank}">remove</button>
//     </div>
//   `;
//   bookHtml += html;
// });

// booksSection.innerHTML = bookHtml;
//adding a new book function

function addBook(title,author){
    const newBook = {
        bookRank : bookObj.books.length +1,
        title : title,
        author: author,

    };
    bookObj.books.push(newBook);
}
  addBook("mkad", "tony");

  // create the book section
let bookHtml = '';

bookObj.books.forEach(book => {
  const html = `
    <div class="book">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button class="${book.bookRank}">remove</button>
    </div>
  `;
  bookHtml += html;
});

booksSection.innerHTML = bookHtml;