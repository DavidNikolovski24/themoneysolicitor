import { Form, InputGroup } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}
const Form10 = ({
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

  const clickNextHandler = () => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(15);
  };
  return (
    <div id="form-10">
      <H3FormHeading>What is your current address?</H3FormHeading>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Your Postcode *"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                postalCode: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Address Line 1 *"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                address1: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Address Line 2"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                address2: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Country"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                country: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Town *"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                town: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Country *"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              address: {
                ...prev.address,
                country2: e.target.value,
              },
            }));
          }}
        />
      </InputGroup>

      <PrimaryButton
        product={enteredData.filledClaimBefore}
        title={"Next"}
        stateSetter={clickNextHandler}
      />
      <ATag href="#" className="primary">
        [ Having Issues? Click Here to Enter Manually ]
      </ATag>
      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form10;
const ATag = styled.a`
  color: ${theme.colors.greys.fifth};
`;
