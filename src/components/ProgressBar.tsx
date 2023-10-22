import styled from "styled-components";
import { theme } from "../styles/themeStyles";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <ProgressBarDiv percentage={percentage}>
      <progress
        value="55"
        max="100"
        style={{ visibility: "hidden", height: 0, width: 0 }}
      ></progress>
      {percentage === 0 ? (
        <StartText>START</StartText>
      ) : (
        <StartText>{percentage}% </StartText>
      )}
      <CompletedText> {percentage === 0 ? "⮟" : "COMPLETED"} </CompletedText>
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
