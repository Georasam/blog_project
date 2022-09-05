
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavScroll({ search, setSearchQuery, searchQuery }) {
  const [handler, setHandler] = useState("");
  const inputHandler = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  const pressEnter = (event) => {
    
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  };
  return (
    <div className="nav-body">
    <Navbar  bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href=""></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/blog_project">Home</Nav.Link>
            <Nav.Link href="">About us</Nav.Link>
            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="">Test 1</NavDropdown.Item>
              <NavDropdown.Item href="">Test 2</NavDropdown.Item>
              <NavDropdown.Item href="">Test 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
          <Form  className="d-flex">
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputHandler}
            />
            <Link  to="blog_project/search">
              <Button
                type="submit"
                onClick={search}
                onKeyPress={pressEnter}
                variant="outline-success"
              >
                Search
              </Button>
              
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScroll;
