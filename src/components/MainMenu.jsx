import "../assets/MainMenu.css";
import { Button, Col, Row, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
import { useEffect } from "react";
export const MainMenu = () => {
  useEffect(() => {
    document.title = "Rock-Paper-Scissors";
  }, []);
  return (
    <div>
      <h1 id="mainTitle">Rock - Paper - Scissors</h1>
      <Container>
        <Row>
          <Col xs="6">
            <Carousel id="carouselMenu">
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Rock} alt="rock" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Paper} alt="paper" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="carouselImages" src={Scissors} alt="scissors" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs="6">
            <Row>
              <Col xs="6">
                <Link to="/singleplayer">
                  <Button variant="outline-primary" className="modeBtn">
                    Singleplayer
                  </Button>
                </Link>{" "}
              </Col>
              <Col xs="6">
                <Link to="/multiplayer">
                  <Button variant="outline-primary" className="modeBtn">
                    Multiplayer
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Link to="/noname">
                <Button variant="outline-primary" className="modeBtnDown">
                  Noname
                </Button>
              </Link>
            </Row>
            <Row>
              <Link to="/how-to-play">
                <Button variant="outline-warning" id="howToPlayBtn">
                  How To Play
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainMenu;
