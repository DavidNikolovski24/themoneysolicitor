import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrivacyLogo from "../../../assets/images/privacy.png";
import { useCallback, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import SignatureCanvas from "react-signature-canvas";
import { theme } from "../../../styles/themeStyles";
import customMarkerURL from "../../../assets/icons/download.png";
interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}

const Form11 = ({
  enteredData,
  setFormControl,
  percentageRemoveHandler,
  percentageAddHandler,
  setEnteredData,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const [canvas, setCanvas] = useState<string | undefined>(undefined);

  const padRef = useRef<SignatureCanvas | null>(null);

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };
  const clickNextHandler = () => {
    setShowModal(true);
    percentageAddHandler(5);
  };

  // Modal handlers
  const clearSignatureCanvas = useCallback(() => {
    padRef?.current?.clear();

    setCanvas(undefined);
  }, []);
  const handleGetCanvas = useCallback(() => {
    const canvas = padRef?.current?.toDataURL();

    setCanvas(canvas);
  }, []);
  return (
    <div id="form-9">
      <H3FormHeading>What's the best way to communicate?</H3FormHeading>

      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Email Address"
          type="email"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              contact: {
                ...prev.contact,
                email: e.target.value,
              },
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Phone Number"
          type="tel"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              contact: {
                ...prev.contact,
                phone: +e.target.value,
              },
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      {/*  */}
      <PrimaryButton
        product={enteredData.year}
        title="SUBMIT"
        stateSetter={clickNextHandler}
      />
      <PreviousBtn clickHandler={clickPrevHandler} />
      {/* modal */}
      <Modal
        size="lg"
        show={showModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <H3FormHeading>
              Great news, you are eligible to make a claim! Sign here to start
              your claim online NOW.
            </H3FormHeading>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <ul className="mb-5">
            <LiStyled>Sign using your finger, mouse or stylus</LiStyled>
            <LiStyled>Keep it fully contained within the box</LiStyled>
            <LiStyled>Ensure it is a true likeness of your signature</LiStyled>
          </ul>
          <SignatureDiv>
            <SignatureCanvas ref={padRef} />
          </SignatureDiv>
          <CheckBoxDiv>
            <CheckBoxStyled
              className="form-check-input"
              type="checkbox"
              id="acceptterms"
              value="true"
            />
            <label htmlFor="acceptterms">
              By clicking submit you agree to us appending your electronic
              signature to the claim documents and confirming that you accept
              the terms of this contract for TMS Legal to represent you in your
              Responsible Lending claim, and that you agree to pay us 45%
              commission if the claim is successful.
            </label>
          </CheckBoxDiv>

          <ButtonsDiv>
            {" "}
            <Button
              variant="danger"
              size="lg"
              onClick={() => clearSignatureCanvas()}
            >
              CLEAR
            </Button>
            <Button
              variant="success"
              size="lg"
              onClick={() => {
                handleGetCanvas();
                setShowModal(false);
              }}
            >
              SUBMIT
            </Button>
          </ButtonsDiv>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Form11;
const boxShadowAnimation = keyframes`

  100% {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
  }
`;

const ButtonsDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SignatureDiv = styled.div`
  border: 2px solid ${theme.colors.greys.second};
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const LiStyled = styled.li`
  list-style-image: url(${customMarkerURL});
`;
const CheckBoxStyled = styled.input`
  width: 35px;
  height: 35px;
  animation: ${boxShadowAnimation} 1s ease-in-out infinite;
  box-shadow: 0 0 0 0 #f1ee05;
`;
const CheckBoxDiv = styled.div`
  display: flex;
  gap: 20px;
`;
