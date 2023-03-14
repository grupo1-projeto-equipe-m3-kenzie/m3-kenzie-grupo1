import styled from "styled-components";
export const LastPostsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem 0 1rem;

  h2 {
    padding: 1rem;
    font-weight: 700;
  }
`;

export const LastPostStyled = styled.ul`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  height: 100%;
  gap: 0.8rem;
  padding: 0.8rem;
  overflow: auto;
`;
