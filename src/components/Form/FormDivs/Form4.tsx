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
const Form4 = ({
  enteredData,
  setFormControl,
  setEnteredData,
  percentageRemoveHandler,
  percentageAddHandler,
}: Props) => {
  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };

  const clickNextHandler = (title: string) => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
    setEnteredData((prev: IEnteredData) => ({ ...prev, occupation: title }));
  };
  return (
    <div id="form-4">
      <H3FormHeading>
        In 2020, at the time you took out the account with Vanquis, what was
        your employment status?
      </H3FormHeading>

      <PrimaryButton
        product={enteredData.occupation}
        title="Employed"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.occupation}
        title="Self-employed"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.occupation}
        title="Student"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.occupation}
        title="Retired"
        stateSetter={clickNextHandler}
      />

      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form4;
