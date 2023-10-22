import { Form } from "react-bootstrap";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrimaryButton from "../../Buttons/PrimaryButton";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import PreviousBtn from "../../Buttons/PreviousBtn";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
}
const Form2 = ({ enteredData, setEnteredData, setFormControl }: Props) => {
  const currentYear = new Date().getFullYear();
  const last17Years = [];

  for (let i = 0; i <= 17; i++) {
    last17Years.push(currentYear - i);
  }
  const clickHandler = () => {
    setFormControl((prev: number) => prev + 1);
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
      <DropDownContainer className="mb-4">
        <Form.Select size="lg" onChange={(e) => handleChange(e)}>
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
      <PrimaryButton
        product={enteredData.year}
        title="Next"
        stateSetter={clickHandler}
      />
      <PreviousBtn formSetter={setFormControl} />
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
