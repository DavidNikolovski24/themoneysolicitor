import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SslIcon from "../assets/images/SslIcon";

import ProgressBar from "../components/ProgressBar";
import FormComponent from "../components/Form/FormComponent";
import { useState } from "react";

const FormSection = () => {
  const [percentProgressBar, setPercentProgressBar] = useState<number>(0);

  return (
    <FormSectionStyled>
      <Container>
        <Row>
          <Col className=" col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12  text-center position-relative">
            <ProgressBarDiv>
              <ProgressBar percentage={percentProgressBar} />
            </ProgressBarDiv>
            <FormComponent setterPercentage={setPercentProgressBar} />
            <div style={{ paddingBottom: "20px" }}>
              <SslIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </FormSectionStyled>
  );
};

export default FormSection;

const FormSectionStyled = styled.section``;
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
