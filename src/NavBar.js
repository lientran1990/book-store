import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavbarComponent() {
  return (
    <Navbar
      className="bg-body-tertiary justify-content-around"
      style={{ padding: "2rem"}}
    >
      <Form inline>
        <InputGroup>
          {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
          <Form.Control
            placeholder="Book Title"
            aria-label="BookTitle"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Book Author"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Find Book</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavbarComponent;
