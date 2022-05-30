// Book class represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class handle ui tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'Huzaifa',
                isbn: '243424'
            },
            {
                title: 'Book Two',
                author: 'Huzaifa',
                isbn: '24532'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btnDelete">x</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteBook(el) {
        if (el.classList.contains('btnDelete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

// store class: handles storage 

// Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a book
document.querySelector('.book-form').addEventListener('submit', (e) => {

    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
    } else {
        // instantiate book
        const book = new Book(title, author, isbn);

        // Add Book to UI
        UI.addBookToList(book);

        // clear fields 
        UI.clearFields();

    }


})

// Event : Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
})
