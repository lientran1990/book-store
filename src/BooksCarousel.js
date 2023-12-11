import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

function BooksCarousel({ books }) {
  if (books === undefined || books.lenght <= 0) return <div></div>;
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
    <>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <div class="item">
              <Card
                style={{ margin: "1rem", padding: "2rem", height: "490px" }}
              >
                <Card.Img
                  variant="top"
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  style={{ height: "300px" }}
                />
                <Card.Body className="card-body d-flex flex-column">
                  <Card.Title>{book.volumeInfo?.title}</Card.Title>
                  <Card.Text>{books.volumeInfo?.authors}</Card.Text>
                  <Button variant="outline-secondary">Details</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default BooksCarousel;
