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
const Form5 = ({
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
    percentageAddHandler(10);
    setEnteredData((prev: IEnteredData) => ({ ...prev, dependents: title }));
  };
  return (
    <div id="form-5">
      <H3FormHeading>
        How many dependents did you have at that time?
      </H3FormHeading>

      <PrimaryButton
        product={enteredData.dependents}
        title="0"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.dependents}
        title="1"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.dependents}
        title="2"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.dependents}
        title="3 or more"
        stateSetter={clickNextHandler}
      />

      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form5;
