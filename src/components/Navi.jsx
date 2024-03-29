import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navi = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Rock-Paper-Scissors
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/singleplayer">
                Singleplayer
              </Nav.Link>
              <Nav.Link as={Link} to="/multiplayer">
                Multiplayer
              </Nav.Link>
              <Nav.Link as={Link} to="/3x3game">
                3x3 Game
              </Nav.Link>
              <Nav.Link as={Link} to="/how-to-play">
                How To Play
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navi;
