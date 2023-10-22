import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";
import { theme } from "../styles/themeStyles";
const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Col>
            <a href="#">
              <img src={LogoImg} alt="" />
            </a>
            <H1Styled>
              Taken Out Repeated High-Cost Credit from Vanquis?
            </H1Styled>
            <H2Styled>
              Starting your claim is easy and 100% online. You could recover
              money back if you were mis-sold
            </H2Styled>
          </Col>
        </Row>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
const HeaderStyled = styled.header`
  background-color: ${theme.colors.blue.second};
  text-align: center;
  padding: 20px 0 75px;
  img {
    max-width: 35%;
  }
`;

const H1Styled = styled.h1`
  padding-top: 20px;
  color: #fff;
  font-size: ${theme.typography.N34}rem;
  font-weight: 600;
`;
const H2Styled = styled.h2`
  font-size: ${theme.typography.N26}rem;
  color: #fff;
  line-height: 35px;
  font-weight: 400;
`;
