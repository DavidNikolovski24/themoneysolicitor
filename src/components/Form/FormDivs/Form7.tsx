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
const Form7 = ({
  enteredData,
  setFormControl,
  setEnteredData,
  percentageRemoveHandler,
  percentageAddHandler,
}: Props) => {
  const titleButtonOne = "No";
  const titleButtonTwo = "Yes";

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = (title: string) => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
    title === titleButtonOne
      ? setEnteredData((prev: IEnteredData) => ({
          ...prev,
          filledClaimBefore: false,
        }))
      : setEnteredData((prev: IEnteredData) => ({
          ...prev,
          filledClaimBefore: true,
        }));
  };
  return (
    <div id="form-7">
      <H3FormHeading>
        Have you, (or a company on your behalf), ever filed a claim with
        Vanquis?
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
    </div>
  );
};

export default Form7;
