import React from 'react';

export default function BookList({ books, deleteBook }) {
    return (
        <div>
            {books.map((Book, index) => (
                <div key={index} className="book-entry">
                    <p>Title: {Book.book_title}</p>
                    <p>Year: {Book.release_year}</p>
                    <button onClick={() => deleteBook(Book.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
