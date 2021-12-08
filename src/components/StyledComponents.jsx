import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>Styled Componenmts</STitle>
      <SButton>Fight!!!!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #46cdcf;
  color: #fff;
  cursor: pointer;
`;
