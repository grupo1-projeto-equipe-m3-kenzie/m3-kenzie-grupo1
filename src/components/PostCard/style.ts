import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostCardStyled = styled.li`
  display: flex;
  flex-direction: column;

  min-width: 260px;
  height: 400px;
  padding: 0.6rem;
  gap: 0.8rem;

  background-color: #d9d9d9;

  border-radius: 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #000000;
    color: #ffffff;
    border-radius: 4px;
    height: 26px;
    width: 80px;
  }
`;

export const ImageUserStyled = styled.div`
  max-width: 40px;
  max-height: 40px;
  width: auto;
  height: auto;

  img {
    background: no-repeat center;
    background-size: cover;
  }
`;

export const ImagePostStyled = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 110px;
    border-radius: 8px;
  }
`;

export const UserDataStyled = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }
`;

export const UserLocationStyled = styled.div`
  display: flex;

  p {
    font-size: 10px;
  }
`;

export const PostContentStyled = styled.div`
  display: grid;
  align-content: space-between;
  height: 100%;

  h4 {
    margin: 0;
  }
  p {
    display: flex;
    justify-self: flex-start;
    justify-self: flex-start;
    height: 110px;
    width: 100%;
    margin: 0px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 120px;
  background-color: #1551ec;
  color: #ffffff;
  border-radius: 4px;
  font-size: 12px;

  :hover {
    background-color: #1551ef;
  }
`;
