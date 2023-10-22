import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import InfoIcon from "../assets/icons/ico-1.png";
import StarIcon from "../assets/icons/ico-2.png";
import PadlockIcon from "../assets/icons/ico-3.png";

const HowItWorks = () => {
  return (
    <SectionStyled>
      <Container fluid="md" className="text-center">
        <Row>
          <Col md={4}>
            <img src={InfoIcon} alt="info-icon" />
            <H4Styled>Get your Mis-sold Loan Fees and Charges back</H4Styled>
            <Paragraph>
              Many loans were not sold properly. You could claim back the fees
              and charges plus 8% interest.
            </Paragraph>
          </Col>
          <ColStyled md={4}>
            <img src={StarIcon} alt="star-icon" />
            <H4Styled>Your Claim Fought by Financial & Legal Experts</H4Styled>
            <Paragraph>
              We're ahead of the field, drawing on years of financial services
              and legal expertise for a strong claim
            </Paragraph>
          </ColStyled>
          <Col md={4}>
            <img src={PadlockIcon} alt="padlock-icon" />
            <H4Styled>Respecting Your Information Security</H4Styled>
            <Paragraph>
              We take security very seriously and follow the rules of the Data
              Protection Act
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
};

export default HowItWorks;
const SectionStyled = styled.section`
  background: #fff;
  color: ${theme.colors.greys.third};
  padding: 15px 0;
  img {
    margin: 40px 0;
    @media screen and (max-width: 767px) {
      margin: 30px 0;
      height: 70px;
    }
  }
`;
const H4Styled = styled.h4`
  font-size: ${theme.typography.N24}rem;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    text-align: center !important;
    margin: 10px 0;
    font-weight: 600;
    color: #000;
    font-size: ${theme.typography.N20}rem;
  }
`;
const Paragraph = styled.p`
  margin-bottom: 1rem;
  margin-top: 0;
  @media screen and (max-width: 767px) {
    font-weight: 400;
    color: #000;
    font-size: 14px;
  }
`;

const ColStyled = styled(Col)`
  @media screen and (max-width: 767px) {
    border-bottom: 2px dashed #72286f;
    border-top: 2px dashed #72286f;
  }
`;
