import styled from "styled-components";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { theme } from "../../../styles/themeStyles";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
}

const Form1 = ({
  enteredData,
  setEnteredData,
  setFormControl,
  percentageAddHandler,
}: Props) => {
  const clickHandler = (title: string) => {
    // state
    setEnteredData((prev: IEnteredData) => ({ ...prev, product: title }));
    // formControl
    setFormControl((prev: number) => prev + 1);
    // percentage
    percentageAddHandler(10);
  };

  return (
    <div id="form-1">
      <H3FormHeading>
        Which product would you like to register a claim against?
      </H3FormHeading>
      <PrimaryButton
        product={enteredData.product}
        title="Vanquis Classic Card"
        stateSetter={clickHandler}
      />
      <PrimaryButton
        product={enteredData.product}
        title="Vanquis Chrome Card"
        stateSetter={clickHandler}
      />
      <PrimaryButton
        product={enteredData.product}
        title="Vanquis Origin Card"
        stateSetter={clickHandler}
      />
      <PrimaryButton
        product={enteredData.product}
        title="Vanquis Personal Loan"
        stateSetter={clickHandler}
      />
      <PrimaryButton
        stateSetter={clickHandler}
        product={enteredData.product}
        title="Not Sure"
      />
    </div>
  );
};

export default Form1;
export const H3FormHeading = styled.h3`
  margin: 0 !important;
  padding: 0 0 20px;
  font-size: 20px !important;
  color: ${theme.colors.greys.third};
  text-align: center;
`;
