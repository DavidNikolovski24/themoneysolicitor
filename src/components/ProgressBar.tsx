import styled from "styled-components";
import { theme } from "../styles/themeStyles";
import { useEffect, useState } from "react";

const ProgressBar = ({ percentageArr }: { percentageArr: number[] }) => {
  const [arrayCounter, setArrayCounter] = useState<number>(0);

  useEffect(() => {
    const sumWithInitial = percentageArr.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
    setArrayCounter(sumWithInitial);
  }, [percentageArr]);

  return (
    <ProgressBarDiv percentage={arrayCounter}>
      <progress
        value="55"
        max="100"
        style={{ visibility: "hidden", height: 0, width: 0 }}
      ></progress>
      {percentageArr.length === 0 ? (
        <StartText>START</StartText>
      ) : (
        <StartText>{arrayCounter}% </StartText>
      )}
      <CompletedText>
        {percentageArr.length === 0 ? "⮟" : "COMPLETED"}
      </CompletedText>
    </ProgressBarDiv>
  );
};

export default ProgressBar;

const ProgressBarDiv = styled.div<{ percentage: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 87%, transparent 80% 100%),
    conic-gradient(
      ${theme.colors.blue.first} ${(props) => props.percentage}%,
      ${theme.colors.greys.second} 0
    );
`;

const StartText = styled.div`
  position: absolute;
  top: 30%;
  color: black;
  font-size: 24px;
`;

const CompletedText = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: black;
`;
