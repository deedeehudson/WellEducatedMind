document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error fetching the book list:', error));
});

function displayBooks(books) {
    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const thumbnail = document.createElement('img');
        thumbnail.src = `thumbnails/${book.BookId}.jpg`; // Replace with your thumbnail directory path
        thumbnail.alt = `${book.Title} thumbnail`;

        const title = document.createElement('h2');
        title.textContent = book.Title;

        const author = document.createElement('p');
        author.textContent = `by ${book.Author}`;

        const detailsLink = document.createElement('a');
        detailsLink.href = `details.html?bookId=${book.BookId}`;
        detailsLink.textContent = 'More Details';

        bookCard.appendChild(thumbnail);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(detailsLink);

        bookList.appendChild(bookCard);
    });
}
