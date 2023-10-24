import { Form, InputGroup, Modal } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import { ErrorMessage } from "./Form2";
import { useState } from "react";
import { ModalBodyStyled } from "./Form6";
import { SpanStyled } from "./Form9";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}
const Form10 = ({
  enteredData,
  setFormControl,
  setEnteredData,
  percentageRemoveHandler,
  percentageAddHandler,
}: Props) => {
  const [errorHandler, setErrorHandler] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [adressModalShow, setAdressModalShow] = useState(false);

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = () => {
    if (
      enteredData.address.postalCode.length === 0 ||
      enteredData.address.address1.length === 0 ||
      enteredData.address.town.length === 0
    ) {
      setErrorHandler(true);
      return;
    } else {
      setModalShow(true);
    }
  };
  return (
    <div id="form-10">
      <H3FormHeading>What is your current address?</H3FormHeading>
      <InputGroup className=" mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Your Postcode *"
          value={enteredData.address.postalCode}
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                postalCode: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      {enteredData.address.postalCode.length === 0 && errorHandler && (
        <ErrorMessage>Please Enter Valid Postal code</ErrorMessage>
      )}
      <InputGroup className=" mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Address Line 1 *"
          value={enteredData.address.address1}
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                address1: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      {enteredData.address.address1.length === 0 && errorHandler && (
        <ErrorMessage>Please Enter Valid Address </ErrorMessage>
      )}
      <InputGroup className=" mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Town *"
          value={enteredData.address.town}
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                town: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      {enteredData.address.town.length === 0 && errorHandler && (
        <ErrorMessage>Please Enter Valid Town </ErrorMessage>
      )}
      <PrimaryButton
        product={enteredData.filledClaimBefore}
        title={"Next"}
        stateSetter={clickNextHandler}
      />
      <ATag href="#" className="primary">
        [ Having Issues? Click Here to Enter Manually ]
      </ATag>
      <PreviousBtn clickHandler={clickPrevHandler} />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <ModalBodyStyled>
          <h4 className="text-center">
            Vanquis Did you have any <SpanStyled>previous addresses</SpanStyled>{" "}
            in the past?
          </h4>
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"No"}
            stateSetter={() => {
              setModalShow(false);
              setFormControl((prev: number) => prev + 1);
              percentageAddHandler(15);
            }}
          />
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"Yes"}
            stateSetter={() => {
              setModalShow(false);
              setAdressModalShow(true);
            }}
          />
        </ModalBodyStyled>
      </Modal>{" "}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={adressModalShow}
      >
        <ModalBodyStyled>
          <h4 className="text-center">Enter your previous address</h4>
          <InputGroup className=" mt-4 p-0" size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Your Postcode *"
              value={enteredData.address.postalCode}
              onChange={(e) => {
                setEnteredData((prev: IEnteredData) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    postalCode: e.target.value,
                  },
                }));
              }}
            />
          </InputGroup>
          {enteredData.address.postalCode.length === 0 && errorHandler && (
            <ErrorMessage>Please Enter Valid Postal code</ErrorMessage>
          )}
          <InputGroup className=" mt-4 p-0" size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Address Line 1 *"
              value={enteredData.address.address1}
              onChange={(e) => {
                setEnteredData((prev: IEnteredData) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    address1: e.target.value,
                  },
                }));
              }}
            />
          </InputGroup>
          {enteredData.address.address1.length === 0 && errorHandler && (
            <ErrorMessage>Please Enter Valid Address </ErrorMessage>
          )}

          <InputGroup className=" mt-4 p-0" size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Town *"
              value={enteredData.address.town}
              onChange={(e) => {
                setEnteredData((prev: IEnteredData) => ({
                  ...prev,
                  address: {
                    ...prev.address,
                    town: e.target.value,
                  },
                }));
              }}
            />
          </InputGroup>
          {enteredData.address.town.length === 0 && errorHandler && (
            <ErrorMessage>Please Enter Valid Town </ErrorMessage>
          )}

          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"Next"}
            stateSetter={() => {
              if (
                enteredData.address.postalCode.length === 0 ||
                enteredData.address.address1.length === 0 ||
                enteredData.address.town.length === 0
              ) {
                setErrorHandler(true);
                return;
              }
              setAdressModalShow(false);
              setFormControl((prev: number) => prev + 1);
              percentageAddHandler(15);
            }}
          />
        </ModalBodyStyled>
      </Modal>
    </div>
  );
};

export default Form10;
const ATag = styled.a`
  color: ${theme.colors.greys.fifth};
`;
