import { useState } from 'react';
import './form.css';
export default function Form({setbooks}) {
  const[title,setTitle]=useState('');
  const[year,setYear]=useState(0);
  function changetitle(e)
  {
    setTitle(e.target.value);
  }
  function changereleaseyear(e)
  {
    setYear(e.target.value);
  }
  const AddBook=async(e)=>{
    e.preventDefault();
    const bookdata={
      book_title:title,
      release_year:year,
    };
    try{
     const response=await fetch("http://127.0.0.1:8000/api/create/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(bookdata),
     });
     if (response.ok) {   
      const data = await response.json();
      console.log(data + " Data Sent Successfully");
      setTitle('');
      setYear(0);
      setbooks((prevBooks) => [...prevBooks, data]);
    } else {
      console.log("Failed to send data. Status code: ", response.status);
    }
    }
    catch(error)
    {
      console.log(error);
    }
  };
  return (
    <div>
        <form onSubmit={AddBook}>
            <label>Enter Book Title</label>
            <input type="text" value={title} onChange={changetitle}></input>
            <label>Enter Book Publish Date</label>
            <input type="number" value={year} onChange={changereleaseyear}></input>
            <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}
