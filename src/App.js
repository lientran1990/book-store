import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alert } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

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

  function BooksCarousel(books) {
    if (books == undefined || books.lenght <= 0) return <div></div>;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="item">
          <Card style={{ margin: "1rem", padding: "2rem" }}>
            <Card.Img
              variant="top"
              src={books[1].volumeInfo?.imageLinks?.thumbnail}
            />
            <Card.Body>
              <Card.Title>{books[0].volumeInfo?.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    );
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
      {BooksCarousel(booksData.items)}

      {BooksTitle(booksData.items)}
    </div>
  );
}

export default App;
