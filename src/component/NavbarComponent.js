import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, Container, Form, Button } from "react-bootstrap";

function NavbarComponent() {
  const [dropdownTitle, setDropdownTitle] = useState(() => {
    // Mengambil nilai awal dari localStorage, jika ada
    return localStorage.getItem("dropdownTitle") || "Pilih Opsi";
  });

  const handleSelect = (eventKey) => {
    setDropdownTitle(eventKey);
    localStorage.setItem("dropdownTitle", eventKey); // Menyimpan nilai di localStorage
  };

  useEffect(() => {
    // Memastikan nilai state di-update ketika komponen dimuat
    const savedTitle = localStorage.getItem("dropdownTitle");
    if (savedTitle) {
      setDropdownTitle(savedTitle);
    }
  }, []);

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <strong>POS ps</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown title={dropdownTitle} id="navbarScrollingDropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="Kasir" href="/">
                Kasir
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="Dashboard" href="/Products">
                Dashboard
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
