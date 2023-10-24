import { Modal } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}
const Form6 = ({
  enteredData,
  setFormControl,
  setEnteredData,
  percentageRemoveHandler,
  percentageAddHandler,
}: Props) => {
  const [modalShow, setModalShow] = useState(false);

  const titleButtonOne = "Yes, I Have Struggled to Repay";
  const titleButtonTwo = "No Issues Repaying";

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = (title: string) => {
    if (title === titleButtonOne) {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        struggleInPayment: true,
      }));
    } else {
      setModalShow(true);
      return;
    }
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(25);
  };
  return (
    <div id="form-6">
      <H3FormHeading>
        Have you experienced any hardships or struggle in making the repayments
        to Vanquis on time while still meeting all your other commitments?
      </H3FormHeading>

      <PrimaryButton
        product={enteredData.struggleInPayment}
        title={titleButtonOne}
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.struggleInPayment}
        title={titleButtonTwo}
        stateSetter={clickNextHandler}
      />

      <PreviousBtn clickHandler={clickPrevHandler} />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <ModalBodyStyled>
          <h4 className="text-center">Sorry, we cannot accept your claim</h4>
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"Back"}
            stateSetter={() => {
              setModalShow(false);
            }}
          />
        </ModalBodyStyled>
      </Modal>
    </div>
  );
};

export default Form6;
export const ModalBodyStyled = styled(Modal.Body)`
  border: 5px solid #2f9de8 !important;
  border-radius: 0 !important;
`;
