import { Col, Form, InputGroup, Row } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrivacyLogo from "../../../assets/images/privacy.png";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import { useState } from "react";

interface Props {
  setFormControl: any;
  enteredData: IEnteredData;
  setEnteredData: any;
  percentageAddHandler: (number: number) => void;
  percentageRemoveHandler: () => void;
}

const Form9 = ({
  enteredData,
  setFormControl,
  percentageRemoveHandler,
  percentageAddHandler,
  setEnteredData,
}: Props) => {
  const [nameField, setNameField] = useState("");
  const [lastNameField, setLastNameField] = useState("");

  const titlesArr = [
    "Mr.",
    "Mrs.",
    "Ms.",
    "Miss.",
    "Dr.",
    "Rev.",
    "Dame.",
    "Lady.",
    "Sir.",
    "Lord.",
  ];
  const dayArr = [];
  const monthsArray = [];
  const yearsArray = [];
  // takedays
  for (let index = 1; index <= 31; index++) {
    dayArr.push(index);
  }
  // take months
  for (let i = 0; i < 12; i++) {
    const date = new Date(0, i);
    const monthName = date.toLocaleString("default", { month: "long" });
    monthsArray.push(monthName);
  }
  // take years
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 18; i > currentYear - 118; i--) {
    yearsArray.push(i);
  }

  const clickPrevHandler = () => {
    setFormControl((prev: number) => prev - 1);
    percentageRemoveHandler();
  };
  const clickNextHandler = () => {
    setFormControl((prev: number) => prev + 1);
    percentageAddHandler(5);
  };
  const handleChangeClientTitle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let choicedTitle = e.target.value;

    if (choicedTitle !== "Select Title") {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        clientTitle: choicedTitle,
      }));
    }
  };

  const handleChangeDayOfBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const choicedDay = e.target.value;

    if (choicedDay !== "Day") {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          dayOfBirth: choicedDay,
        },
      }));
    }
  };
  const handleChangeMonthOfBirth = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const choicedMonth = e.target.value;

    if (choicedMonth !== "Month") {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          mounthOfBirth: choicedMonth,
        },
      }));
    }
  };
  const handleChangeYearOfBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const choicedYear = e.target.value;

    if (choicedYear !== "Year") {
      setEnteredData((prev: IEnteredData) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          yearOfBirth: choicedYear,
        },
      }));
    }
  };

  return (
    <div id="form-9">
      <H3FormHeading>Please enter your FULL NAME & DATE OF BIRTH</H3FormHeading>
      <Form.Select
        size="lg"
        onChange={(e) => handleChangeClientTitle(e)}
        value={enteredData.clientTitle}
      >
        <option>Select Title</option>
        {titlesArr.map((title) => (
          <option value={title} key={title}>
            {title}
          </option>
        ))}
      </Form.Select>
      <InputGroup className="mb-4 mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="First Name"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              name: e.target.value,
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
          placeholder="Last Name"
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              lastName: e.target.value,
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      <FieldsetStyled>
        <LegendStyled>Date Of Birth</LegendStyled>

        <Row>
          <Col sm={4} className="mb-5">
            {" "}
            <Form.Select
              size="lg"
              onChange={(e) => handleChangeDayOfBirth(e)}
              value={enteredData.dateOfBirth.dayOfBirth}
            >
              <option>Day</option>
              {dayArr.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </Form.Select>
          </Col>{" "}
          <Col sm={4} className="mb-5">
            {" "}
            <Form.Select
              size="lg"
              onChange={(e) => handleChangeMonthOfBirth(e)}
              value={enteredData.dateOfBirth.mounthOfBirth}
            >
              <option>Month</option>
              {monthsArray.map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </Form.Select>
          </Col>{" "}
          <Col sm={4} className="mb-5">
            {" "}
            <Form.Select
              size="lg"
              onChange={(e) => handleChangeYearOfBirth(e)}
              value={enteredData.dateOfBirth.yearOfBirth}
            >
              <option>Year</option>
              {yearsArray.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </FieldsetStyled>

      {/*  */}
      <PrimaryButton
        product={enteredData.year}
        title="Next"
        stateSetter={clickNextHandler}
      />
      <PreviousBtn clickHandler={clickPrevHandler} />
    </div>
  );
};

export default Form9;
const FieldsetStyled = styled.fieldset`
  border: 1px solid #2f9de8;
  padding: 10px;
  border-radius: 0;
  margin-bottom: 25px;
`;

const LegendStyled = styled.legend`
  padding: 0 10px;
  display: block;
  float: none;
  width: auto !important;
  max-width: 100%;
  margin-bottom: 8px;
  font-size: ${theme.typography.N24}rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
  text-align: left;
`;
