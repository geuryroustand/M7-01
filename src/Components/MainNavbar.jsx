import { Navbar, Container, Nav } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Jobs Searcher</Navbar.Brand>
        {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
      </Navbar>
    </>
  );
};

export default MainNavbar;
