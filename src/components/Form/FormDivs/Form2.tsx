import { Form } from "react-bootstrap";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrimaryButton from "../../Buttons/PrimaryButton";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import PreviousBtn from "../../Buttons/PreviousBtn";
import { useState } from "react";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}
const Form2 = ({
  enteredData,
  setEnteredData,
  setFormControl,
  percentageAddHandler,
  percentageRemoveHandler,
}: Props) => {
  const currentYear = new Date().getFullYear();
  const last17Years = [];

  const [errorHandler, setErrorHandler] = useState(false);

  for (let i = 0; i <= 17; i++) {
    last17Years.push(currentYear - i);
  }
  const clickNextHandler = () => {
    if (enteredData.year === 0) {
      setErrorHandler(true);
      return;
    }
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
  };
  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let choicedYear = +e.target.value;

    if (choicedYear !== 0 && !isNaN(choicedYear)) {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        year: +e.target.value,
      }));
    }
  };

  return (
    <div id="form-2">
      <H3FormHeading>
        What year did you take out the product with Vanquis?
      </H3FormHeading>
      <DropDownContainer>
        <Form.Select
          size="lg"
          value={enteredData.year}
          onChange={(e) => handleChange(e)}
          className="display-inline"
        >
          <option>Select Year</option>
          {last17Years.map((year) => (
            <option
              value={year}
              key={year}
              onChange={() => {
                setEnteredData((prev: IEnteredData) => ({
                  ...prev,
                  year: year,
                }));
              }}
            >
              {year}
            </option>
          ))}
        </Form.Select>
      </DropDownContainer>
      {errorHandler && <ErrorMessage>Please select year</ErrorMessage>}

      <PrimaryButton
        product={enteredData.year}
        title="Next"
        stateSetter={clickNextHandler}
      />
      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form2;
const DropDownContainer = styled.div`
  * {
    width: 100%;
    font-size: ${theme.typography.N20}rem;
    font-weight: 300;
    border: 2px solid #ddd !important;
    height: 50px !important;
    border-radius: 1px;
  }
`;
export const ErrorMessage = styled.span`
  color: #fff;
  width: 100%;
  float: left;
  background: red;
  font-size: ${theme.typography.N14}rem;
  padding: 0 5px;
  border-radius: 4px;
  text-align: left;
`;
