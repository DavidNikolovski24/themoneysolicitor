import { Accordion, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../styles/themeStyles";

const Faq = () => {
  interface Prop {
    headline: string;
    body: string;
  }

  const questions: Prop[] = [
    {
      headline: "How much time does the claims process take?",
      body: "Generally, it will take approximately 8 to 12 weeks from receipt of your claim form until your payout. However, if a lender disputes any part of a claim and it is referred to the Financial Ombudsman Service (FOS), it could extend your claim period up to 12 months.",
    },
    {
      headline: "Are there any upfront fees?",
      body: "No, we will not ask for any money upfront. We’ll start your claim for FREE and if your claim is successful we charge 45% commission (VAT included).",
    },
    {
      headline: "Is there a deadline to file a claim?",
      body: "Yes, the deadline to file a claim is 6 years from the date you had your credit, but there are exceptions. Please note that if your lender has gone into administration it will affect the amount you receive.",
    },
    {
      headline: "What evidence is required to get started?",
      body: "Getting started is quite easy. We simply need you to provide some basic information such as your full name, the address where you resided during the term of the credit(s) and the name of your lender. Bank statements can be very useful. However, we can request these for you.",
    },
    {
      headline:
        "Can I still file a claim if I’ve had credits from more than one lender?",
      body: "Yes! You’ll have the opportunity to let us know when filling out your application. We will check if you had a credit from any number of lenders and contact each lender for you!",
    },
    {
      headline: "Will the claim impact my Credit Score?",
      body: "In the event of a successful claim, we’ll ask the lender to remove the credit from your credit record. Your lender is required to contact the credit reference agency as we cannot do it on their behalf.",
    },
    {
      headline: "Should I expect you to contact my employer?",
      body: "No, we will never contact your employer regarding your claim. Our claims process is confidential and we will only share the information you provide with your lender(s), Credit Reference Agencies and the Financial Ombudsman (FOS) if required.",
    },
    {
      headline:
        "Do I need to continue paying the lender while the claim is ongoing?",
      body: "Yes, you should continue making payments to your lender during this time unless you’ve been told otherwise by the lender or administrator. Failing to continue your payments can result in a negative credit rating and the possibility of debt collection agencies getting involved.",
    },
    {
      headline:
        "Is it possible to get a refund without using a claims company?",
      body: "Yes, you can file a claim for free without using a Claims Management Company by writing directly to your lender(s) and requesting a refund. If your complaint is rejected, you can send your claim to the Financial Ombudsman Service.",
    },
    {
      headline: "Why should I use a claims company to file a claim?",
      body: "Filing yourself can be such a headache! You can save yourself from the hassle by using our service. We have an experienced team of professionals that are ready to manage your claim and provide you with the best chance for a successful claim.",
    },
    {
      headline: "Will you keep me updated throughout the process?",
      body: "Yes, our team will contact you during the initial 8 week period to update you on the status of your claim. Once the lender has contacted us, we’ll contact you again to let you know. Our team will be ready to answer any questions you may have throughout the process. In the event that your case goes to the Financial Ombudsman Service (FOS), we will be in touch to let you know what to expect.",
    },
  ];

  return (
    <FaqSection>
      <Container fluid="md">
        <Row>
          <Col>
            <H4Styled>
              Your questions about TMS Responsible Lending answered
            </H4Styled>
            <Paragraph>
              Your questions about TMS Responsible Lending answered Click on a
              question below to view the answer.
            </Paragraph>
            <Accordion>
              {questions.map((el: Prop) => (
                <Accordion.Item eventKey={el.headline} key={el.headline}>
                  <Accordion.Header>{el.headline}</Accordion.Header>
                  <Accordion.Body>{el.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </FaqSection>
  );
};

export default Faq;

const FaqSection = styled.section`
  background-color: ${theme.colors.greys.first};
  padding: 40px 0 30px;
  color: #212529;
`;

const H4Styled = styled.h4`
  font-size: ${theme.typography.N20}rem;
`;
const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;
