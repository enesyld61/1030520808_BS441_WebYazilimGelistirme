/* eslint-disable jsx-a11y/alt-text */
import "../MainMenu.css";
import { Button, Col, Row, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
export const MainMenu = () => {
  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <Container>
        <Row>
          <Col xs="6">
            <Carousel id="abc">
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Rock} />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Paper} />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Scissors} />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs="3">
            <Link to="/singleplayer">
              <Button variant="outline-primary" className="btnn">
                Singleplayer
              </Button>
            </Link>{" "}
          </Col>
          <Col xs="3">
            <Link to="/multiplayer">
              <Button variant="outline-primary" className="btnn">
                Multiplayer
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainMenu;
