import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 99vw;
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
    width: 80px;
    object-fit: contain;
    object-position: center;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
  }

  button {
    border: none;
    border-radius: 4px;
    background-color: #000000;
    color: #ffffff;
    height: 26px;
    width: 46px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  border: 1px solid #0c0c0c;
  border-radius: 8px;
  color: #0c0c0c;
  font-size: 16px;
  font-weight: bold;
  width: 26px;
  height: 26px;
  margin: 0;
`;
