import { useState } from "react";
import Form1 from "./FormDivs/Form1";
import Form2 from "./FormDivs/Form2";
import Form3 from "./FormDivs/Form3";
import Form4 from "./FormDivs/Form4";
import Form5 from "./FormDivs/Form5";
import Form6 from "./FormDivs/Form6";
import Form7 from "./FormDivs/Form7";
import Form8 from "./FormDivs/Form8";
import Form9 from "./FormDivs/Form9";
import Form10 from "./FormDivs/Form10";
import Form11 from "./FormDivs/Form11";
import styled from "styled-components";

interface Props {
  setterPercentage: any;
}
export interface IEnteredData {
  product: string;
  year: number;
  activeAccount: boolean;
  occupation: string;
  dependents: string;
  struggleInPayment: boolean;
  filledClaimBefore: boolean;
  bankruptcySubject: boolean;
  clientTitle: string;
  name: string;
  lastName: string;
  dateOfBirth: {
    dayOfBirth: number;
    mounthOfBirth: number;
    yearOfBirth: number;
  };
}

const FormComponent = ({ setterPercentage }: Props) => {
  const [enteredData, setEnteredData] = useState<IEnteredData>({
    product: "",
    year: 0,
    activeAccount: false,
    occupation: "",
    dependents: "",
    struggleInPayment: false,
    filledClaimBefore: false,
    bankruptcySubject: false,
    clientTitle: "",
    name: "",
    lastName: "",
    dateOfBirth: {
      dayOfBirth: 0,
      mounthOfBirth: 0,
      yearOfBirth: 0,
    },
  });

  console.log(enteredData);
  const [formControl, setFormControl] = useState(1);

  const percentageProgressBarAddHandler = (number: number) => {
    setterPercentage((prev: number[]) => [...prev, number]);
  };

  const percentageProgressBarRemoveHandler = () => {
    setterPercentage((prev: number[]) => prev.slice(0, -1));
  };
  return (
    <FormStyled method="POST" autoComplete="off">
      {formControl === 1 && (
        <Form1
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
        />
      )}
      {formControl === 2 && (
        <Form2
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 3 && (
        <Form3
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 4 && (
        <Form4
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 5 && (
        <Form5
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 6 && (
        <Form6
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 7 && (
        <Form7
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 8 && (
        <Form8
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 9 && (
        <Form9
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 10 && (
        <Form10
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
          percentageAddHandler={percentageProgressBarAddHandler}
          percentageRemoveHandler={percentageProgressBarRemoveHandler}
        />
      )}
      {formControl === 11 && (
        <Form11
          setFormControl={setFormControl}
          enteredData={enteredData}
          setEnteredData={setEnteredData}
        />
      )}
    </FormStyled>
  );
};

export default FormComponent;
const FormStyled = styled.form`
  padding: 0 15px;
  margin-top: 100px;
`;
