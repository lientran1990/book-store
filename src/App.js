import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import NavbarComponent from "./NavBar";
import BooksCarousel from "./BooksCarousel";

function App() {
  const [booksData, setbooksData] = useState({});
  const [childCareData, setChildCareData] = useState({});

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=react`)
      .then((response) => response.json())
      .then((jsonData) => setbooksData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=child-care`)
      .then((response) => response.json())
      .then((jsonData) => setChildCareData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  function BooksTitle(books) {
    if (books == undefined || books.lenght <= 0) return <div></div>;

    return books.map((book) => (
      <div>
        <img src={book.volumeInfo?.imageLinks?.thumbnail}></img>
        <p>{book.volumeInfo.title}</p>
      </div>
    ));
  }

  return (
    <div>
      <h1>Book Store</h1>
      <NavbarComponent />
      <BooksCarousel books={booksData.items} />
      <h3>Childcare books</h3>
      <BooksCarousel books={childCareData.items} />
      {/* {BooksTitle(booksData.items)} */}
    </div>
  );
}

export default App;
