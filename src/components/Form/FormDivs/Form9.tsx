import { Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import PreviousBtn from "../../Buttons/PreviousBtn";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { IEnteredData } from "../FormComponent";
import { H3FormHeading } from "./Form1";
import PrivacyLogo from "../../../assets/images/privacy.png";
import styled from "styled-components";
import { theme } from "../../../styles/themeStyles";
import { ErrorMessage } from "./Form2";
import { useState } from "react";
import { ModalBodyStyled } from "./Form6";

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
  const [errorHandler, setErrorHandler] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [previousLastNameModalShow, setPreviousLastNameModalShow] =
    useState(false);

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
    if (
      enteredData.clientTitle.trim().length === 0 ||
      enteredData.name.length === 0 ||
      enteredData.lastName.length === 0 ||
      enteredData.dateOfBirth.dayOfBirth === 0 ||
      enteredData.dateOfBirth.mounthOfBirth === 0 ||
      enteredData.dateOfBirth.yearOfBirth === 0
    ) {
      setErrorHandler(true);
      return;
    } else {
      setModalShow(true);
    }
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
      {enteredData.clientTitle.trim().length === 0 && errorHandler && (
        <ErrorMessage>Please select your title</ErrorMessage>
      )}
      <InputGroup className=" mt-4 p-0 " size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="First Name"
          value={enteredData.name}
          onChange={(e) => {
            setEnteredData((prev: IEnteredData) => ({
              ...prev,
              name: e.target.value.trim(),
            }));
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg">
          <img src={PrivacyLogo} alt="privacy-logo" />
        </InputGroup.Text>
      </InputGroup>
      {enteredData.name.length === 0 && errorHandler && (
        <ErrorMessage>Please enter your name</ErrorMessage>
      )}
      <InputGroup className="mt-4 p-0" size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Last Name"
          value={enteredData.lastName}
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
      {enteredData.lastName.length === 0 && errorHandler && (
        <ErrorMessage>Please enter your lastname</ErrorMessage>
      )}
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
            {enteredData.dateOfBirth.dayOfBirth === 0 && errorHandler && (
              <ErrorMessage>Please select day</ErrorMessage>
            )}
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
            {enteredData.dateOfBirth.mounthOfBirth === 0 && errorHandler && (
              <ErrorMessage>Please select month</ErrorMessage>
            )}
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
            {enteredData.dateOfBirth.yearOfBirth === 0 && errorHandler && (
              <ErrorMessage>Please select year</ErrorMessage>
            )}
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <ModalBodyStyled>
          <h4 className="text-center">
            Was your <SpanStyled>surname</SpanStyled> different when you took
            out the credit with Vanquis
          </h4>
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"No"}
            stateSetter={() => {
              setModalShow(false);
              setFormControl((prev: number) => prev + 1);
              percentageAddHandler(5);
            }}
          />
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"Yes"}
            stateSetter={() => {
              setModalShow(false);
              setPreviousLastNameModalShow(true);
            }}
          />
        </ModalBodyStyled>
      </Modal>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={previousLastNameModalShow}
      >
        <ModalBodyStyled>
          <h4 className="text-center">Enter your previous surname</h4>
          <InputGroup className=" mt-4 p-0 " size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter your previous surname "
              value={enteredData.lastName}
              onChange={(e) => {
                setEnteredData((prev: IEnteredData) => ({
                  ...prev,
                  lastName: e.target.value.trim(),
                }));
              }}
            />
          </InputGroup>
          {enteredData.lastName.length === 0 && errorHandler && (
            <ErrorMessage>Please Enter Valid Surname</ErrorMessage>
          )}
          <PrimaryButton
            product={enteredData.struggleInPayment}
            title={"Next"}
            stateSetter={() => {
              if (enteredData.lastName.length === 0) {
                // greska
                setErrorHandler(true);
                return;
              }
              setModalShow(false);
              setFormControl((prev: number) => prev + 1);
              percentageAddHandler(5);
            }}
          />
        </ModalBodyStyled>
      </Modal>
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
export const SpanStyled = styled.span`
  background-color: #ff0;
  color: #1483ce;
  padding: 0;
`;
