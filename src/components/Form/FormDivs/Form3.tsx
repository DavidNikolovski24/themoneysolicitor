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
const Form3 = ({
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
    title === "Yes"
      ? setEnteredData((prev: IEnteredData) => ({
          ...prev,
          activeAccount: true,
        }))
      : setEnteredData((prev: IEnteredData) => ({
          ...prev,
          activeAccount: false,
        }));
  };
  return (
    <div id="form-3">
      <H3FormHeading>Is your account with Vanquis still active?</H3FormHeading>

      <PrimaryButton
        product={enteredData.activeAccount}
        title="Yes"
        stateSetter={clickNextHandler}
      />
      <PrimaryButton
        product={enteredData.activeAccount}
        title="No"
        stateSetter={clickNextHandler}
      />
      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form3;
