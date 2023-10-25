import Header from "../sections/Header";
import ThumbIcon from "../assets/icons/thumb.png";
import styled from "styled-components";
import Footer from "../sections/Footer";

const ThankPage = () => {
  return (
    <ThankPageDiv>
      <Header headings={false} />
      <CenterDiv>
        <DivStyled>
          <ImgStyled src={ThumbIcon} alt="" />
          <h1>Thank you</h1>
          <p>You have successfully submitted your claim</p>
        </DivStyled>
      </CenterDiv>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </ThankPageDiv>
  );
};

export default ThankPage;

const ThankPageDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CenterDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgStyled = styled.img`
  max-width: 70%;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FooterDiv = styled.div`
  width: 100%;
`;
