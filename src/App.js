import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [booksData, setbooksData] = useState({});

  function BooksTitle(books) {
    if (books == undefined || books.lenght <= 0) return <div></div>;

    return books.map((book) => (
      <div>
        <img src={book.volumeInfo?.imageLinks?.thumbnail}></img>
        <p>{book.volumeInfo.title}</p>
      </div>
    ));
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=react`)
      .then((response) => response.json())
      .then((jsonData) => setbooksData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Book Store</h1>
      {BooksTitle(booksData.items)}
    </div>
  );
}

export default App;
