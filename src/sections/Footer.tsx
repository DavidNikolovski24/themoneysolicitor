import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../styles/themeStyles";

const Footer = () => {
  return (
    <FooterStyled>
      <Container fluid="md">
        <Row>
          <Col lg={8}>
            <p>
              TMS Legal Ltd is a limited company registered in England and Wales
              under company no: 10315962 Its registered office is Arena, 9
              Nimrod Way, Ferndown, BH21 7UH It is authorised and regulated by
              the Solicitors Regulation Authority, Number: 645041
            </p>
            <CopyrightDiv>
              <UlFooter>
                <li>
                  <a href="#">Privacy and Cookie Policy</a>
                </li>
                <li>
                  <a href="#">TMS Legal Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Complaints Procedure</a>
                </li>
              </UlFooter>
            </CopyrightDiv>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
const FooterStyled = styled.footer`
  background-color: ${theme.colors.greys.forth};
  color: ${theme.colors.greys.second};
  height: auto;
  padding: 25px 0;
  text-align: left;
  @media screen and (max-width: 767px) {
    height: auto;
    padding: 25px 0;
    background: ${theme.colors.greys.fifth};
    text-align: left;
  }

  p {
    font-size: ${theme.typography.N14}rem;
    @media screen and (max-width: 767px) {
      margin: 7px 0 20px;
      padding: 0;
      color: #fff !important;
      font-weight: 300;
      text-align: center;
    }
  }
`;

const CopyrightDiv = styled.div`
  text-align: center;
  color: ${theme.colors.greys.second};
`;
const UlFooter = styled.ul`
  padding: 0;
  text-align: left;
  margin-top: 15px;

  li {
    list-style: none;
    border-right: 1px solid ${theme.colors.greys.second};
    padding: 0 10px;
    display: inline;
    color: ${theme.colors.greys.second};
    @media screen and (max-width: 767px) {
      display: block;
      border-top: 1px dotted #94a2a6;
      padding: 6px 0 !important;
      font-size: 14px;
      border-right: none !important;

      &:last-child {
        border-top: none !important;
      }
      &:first-child {
        display: block !important;
      }
      a {
        color: #fff !important;
        text-decoration: none;
      }
    }
  }
  li:last-child {
    list-style: none;
    border-right: none;
    padding: 0 10px;
    display: inline;
    color: ${theme.colors.greys.second};
  }
  li:first-child {
    list-style: none;
    border-right: 1px solid ${theme.colors.greys.second};
    padding-left: 0;
    display: inline;
    color: ${theme.colors.greys.second};
  }
`;
