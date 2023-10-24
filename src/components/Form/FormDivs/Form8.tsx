import { Modal } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import { ModalBodyStyled } from "./Form6";
import { useState } from "react";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}
const Form8 = ({
  enteredData,
  setFormControl,
  setEnteredData,
  percentageRemoveHandler,
  percentageAddHandler,
}: Props) => {
  const [modalShow, setModalShow] = useState(false);

  const titleButtonOne = "No";
  const titleButtonTwo = "Yes";

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = (title: string) => {
    if (title === titleButtonOne) {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        bankruptcySubject: false,
      }));
    } else {
      setModalShow(true);
      return;
    }
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
  };
  return (
    <div id="form-8">
      <H3FormHeading>
        Are you currently subject to Bankruptcy or Trust deed?
      </H3FormHeading>

      <PrimaryButton
        product={enteredData.filledClaimBefore}
        title={titleButtonOne}
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.filledClaimBefore}
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

export default Form8;
