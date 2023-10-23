import styled from "styled-components";
import { theme } from "../../styles/themeStyles";

const PreviousBtn = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <ATag
      onClick={() => {
        clickHandler();
      }}
    >
      {"<< Previous"}
    </ATag>
  );
};

export default PreviousBtn;
const ATag = styled.a`
  font-size: ${theme.typography.N20}rem;
  color: ${theme.colors.blue.forth};
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  cursor: pointer;
`;
