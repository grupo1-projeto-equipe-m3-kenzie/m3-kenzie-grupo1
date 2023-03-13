import styled from "styled-components";

export const FollowingPostsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem 0 1rem;


  h2 {
    margin: 0 0 0 1rem;
  }
`;

export const FollowingPostsStyled = styled.ul`
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  height: 100%;
  gap: 0.8rem;
  padding: 0.8rem;
  overflow: auto;
`;
