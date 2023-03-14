import styled from "styled-components";

export const FollowingPostsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem 0 1rem;

  h2 {
    padding: 1rem;
    font-weight: 700;
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

// @media (max-width: 320px) {
//   padding: 2rem 0.8rem;
// }

// @media (min-width: 321px) and (max-width: 375px) {
//   padding: 2rem 2.4rem;
// }

// @media (min-width: 376px) and (max-width: 425px) {
//   padding: 2rem 4rem;
// }

// @media (min-width: 426px) and (max-width: 768px) {
//   padding: 2rem 14.6rem;
// }

// @media (min-width: 769px) and (max-width: 1024px) {
//   padding: 2rem 22.6rem;
// }

// @media (min-width: 1025px) and (max-width: 1440px) {
//   padding: 2rem 35.6rem;
// }

// @media (min-width: 1441px) and (max-width: 2560px) {
//   padding: 2rem 50.6rem;
// }
