import styled from "styled-components";
import { theme } from "../../styles/themeStyles";

interface Props {
  title: string;
  product?: string | number | boolean;
  stateSetter?: any;
}
const PrimaryButton = ({ title, product, stateSetter }: Props) => {
  return (
    <PrimaryButtonContainer
      onClick={() => {
        stateSetter(title);
      }}
      product={
        product == title ? theme.colors.blue.third : theme.colors.blue.first
      }
    >
      {title}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
const PrimaryButtonContainer = styled.div<any>`
  background: ${(props) => props.product};
  display: inline-block;
  border: 0 solid ${(props) => props.product};
  border-bottom: 3px solid #257eba;
  font-size: ${theme.typography.N20}rem;
  color: #fff;
  font-weight: 600;
  border-radius: 1px !important;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 16px 15px;
`;
