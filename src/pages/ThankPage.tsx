import Header from "../sections/Header";
import ThumbIcon from "../assets/icons/thumb.png";
import styled from "styled-components";
import Footer from "../sections/Footer";
const ThankPage = () => {
  return (
    <ThankPageDiv>
      <Header headings={false} />
      <CenterDiv>
        <img src={ThumbIcon} alt="" />
        <h1>Thank you</h1>
        <p>You have successfully submitted your claim</p>
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
`;

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
