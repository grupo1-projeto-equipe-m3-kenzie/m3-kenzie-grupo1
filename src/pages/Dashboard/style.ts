import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardStyled = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
`;

export const DashboardHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.2rem;
  height: 70px;
  background-color: #aeaeae;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;

    gap: 1rem;

    @media (max-width: 320px) {
      gap: 0.6rem;
    }
  }

  button {
    width: 146px;
    height: 40px;
    border: none;
    outline: none;
    background-color: var(--button-2);
    border-radius: 8px;
    color: var(--grey-0);

    :hover {
      background-color: rgba(255, 0, 0, 0.8);
      transition: 0.6s;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0c0c0c;
  border-radius: 8px;
  color: #0c0c0c;
  font-size: 16px;
  font-weight: bold;
  width: 26px;
  height: 26px;
  margin: 0;

  :hover {
    background-color: rgba(12, 12, 12, 0.1);
    border: 1px solid rgba(12, 12, 12, 0.6);
    color: rgba(12, 12, 12, 0.6);
    transition: 0.6s;
  }
`;
