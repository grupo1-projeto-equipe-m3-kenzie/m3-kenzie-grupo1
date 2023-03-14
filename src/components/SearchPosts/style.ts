import styled from "styled-components";

export const SearchPostStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 93vw;
  padding: 1rem 1rem 0 1rem;
  gap: 0.6rem;

  input {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    padding: 0 0.6rem;
  }

  button {
    position: relative;
    top: 0;
    right: 83px;
    height: 32px;
    width: 76px;
    border-radius: 4px;
    background-color: #8b8b8b;
    color: #ffffff;

    :hover {
      background-color: rgba(139, 139, 139, 0.8);
      transition: 0.6s;
    }
  }
`;
