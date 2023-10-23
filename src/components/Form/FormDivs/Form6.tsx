import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";

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
  const titleButtonOne = "Yes, I Have Struggled to Repay";
  const titleButtonTwo = "No Issues Repaying";

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = (title: string) => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(25);
    title === titleButtonOne
      ? setEnteredData((prev: IEnteredData) => ({
          ...prev,
          struggleInPayment: true,
        }))
      : setEnteredData((prev: IEnteredData) => ({
          ...prev,
          struggleInPayment: false,
        }));
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
    </div>
  );
};

export default Form6;
