import styled from "styled-components";
import { theme } from "../../styles/themeStyles";

const PreviousBtn = ({ formSetter }: { formSetter: any }) => {
  return (
    <ATag
      onClick={() => {
        formSetter((prev: number) => prev - 1);
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
`;
