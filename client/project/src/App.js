import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import BookList from './Components/Booklist';
function App() {
  const [books,setbooks]=useState([]);
  useEffect(()=>{
    fetchbooks();
  },[]);
  const fetchbooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books");
      const data=await response.json();
      console.log(data);
      setbooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/booksdelete/${id}/`, {
        method: "DELETE",
      });
        console.log(id);
        setbooks(books.filter((book) => book.id !== id));
        console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting the book:", error);
    }
  };
  return (
    <div className="App">
      <h1>My BookStore</h1>
      <Form setbooks={setbooks}/>
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
