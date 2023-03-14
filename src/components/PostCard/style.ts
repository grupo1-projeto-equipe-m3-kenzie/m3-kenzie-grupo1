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

  @media (max-width: 320px) {
    min-width: 200px;
    height: 280px;
  }

  @media (min-width: 321px) and (max-width: 768px) {
    min-width: 200px;
    height: 280px;
  }
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

    :hover {
      background-color: rgba(0, 0, 0, 0.8);
      transition: 0.6s;
    }
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
    @media (max-width: 320px) {
      height: 60px;
    }

    @media (min-width: 321px) and (max-width: 768px) {
      height: 60px;
    }
  }
`;

export const UserDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

  p {
    display: flex;
    justify-self: flex-start;
    justify-self: flex-start;
    height: 110px;
    width: 100%;
    margin: 0px;

    @media (max-width: 320px) {
      height: 80px;
    }

    @media (min-width: 321px) and (max-width: 768px) {
      height: 80px;
    }
  }

  @media (max-width: 320px) {
    min-width: 200px;
    height: 280px;
  }

  @media (min-width: 321px) and (max-width: 768px) {
    min-width: 200px;
    height: 280px;
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
    background-color: rgba(21, 81, 236, 0.8);
    transition: 0.6s;
  }
`;
