import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SslIcon from "../assets/images/SslIcon";

import ProgressBar from "../components/ProgressBar";
import FormComponent from "../components/Form/FormComponent";
import { useState } from "react";

const FormSection = () => {
  const [percentProgressBarArr, setPercentProgressBarArr] = useState<number[]>(
    []
  );

  return (
    <section>
      <Container>
        <Row>
          <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 text-center position-relative">
            <ProgressBarDiv>
              <ProgressBar percentageArr={percentProgressBarArr} />
            </ProgressBarDiv>
            <FormComponent setterPercentage={setPercentProgressBarArr} />
            <div style={{ padding: "20px 0" }}>
              <SslIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormSection;

const ProgressBarDiv = styled.div`
  width: 120px;
  height: 120px !important;
  margin: 0 auto 30px;
  position: absolute;
  top: -60px;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
