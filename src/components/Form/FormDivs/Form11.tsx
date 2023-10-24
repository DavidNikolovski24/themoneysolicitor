import { Form, InputGroup } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrivacyLogo from "../../../assets/images/privacy.png";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}

const Form11 = ({
  enteredData,
  setFormControl,
  percentageRemoveHandler,
  percentageAddHandler,
  setEnteredData,
}: Props) => {
  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };
  const clickNextHandler = () => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
  };

  return (
    <div id="form-9">
      <H3FormHeading>What's the best way to communicate?</H3FormHeading>

      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Email Address"
          type="email"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              contact: {
                ...prev.contact,
                email: e.target.value,
              },
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Phone Number"
          type="tel"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              contact: {
                ...prev.contact,
                phone: +e.target.value,
              },
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      {/*  */}
      <PrimaryButton
        product={enteredData.year}
        title="SUBMIT"
        stateSetter={clickNextHandler}
      />
      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form11;
