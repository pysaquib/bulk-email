import React from "react";
import { Container, Row, Col } from "reactstrap";

const Email = (props) => {
  return (
    <Container>
      <Row>
        <Col
          sm={{ size: 6, order: 2, offset: 1 }}
          lg={{ size: 6, order: 2, offset: 1 }}
        >
          <div style={{ background: "red" }}>red</div>
        </Col>
        <Col
          sm={{ size: 6, order: 2, offset: 1 }}
          lg={{ size: 6, order: 2, offset: 1 }}
        >
          <div style={{ background: "blue" }}>blue</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Email;
