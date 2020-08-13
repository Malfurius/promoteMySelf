import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(props) {
  return (
      <Navbar bg="light" expand="lg" className={"footer"}>
        <div className={"horizontalCenter fitContent"}>
          <Row>
            <Col>
              <div className={"horizontalCenter fitContent"}>
                <a href={"#Disclaimer"}>Disclaimer</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              © Maximilian Henneberg 2020
            </Col>
          </Row>
        </div>
      </Navbar>
  )
}

export default Footer;
