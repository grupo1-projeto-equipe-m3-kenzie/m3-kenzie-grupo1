import styled, { css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: absolute;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 47px;

    margin-left: 10px;
    padding-right: 1600px;
  }
  a {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #2d2d2d;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    background-color: #ffff;
    padding-left: 13px;
    padding-right: 13px;
    border-radius: 6px;
    padding-top: -6px;
    padding-bottom: -6px;
  }
`;
export const Background = styled.section`
  background-color: black;

  height: 550px;
`;

export const ImgHero = styled.img`
  width: 100%;
  height: 550px;
`;

export const TextHero = styled.div`
  position: absolute;
  top: 207px;
  left: 95px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 60px;
    margin: 0;
  }

  p {
    color: white;
    font-size: 40px;
    width: 71%;
    text-align: center;
    margin: 0;
  }
`;

export const DevContri = styled.section`
  background-color: #d9d9d9;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  li {
    list-style: none;
    padding-right: 30px;
  }

  ul {
    padding: 0;
    display: flex;
  }
  a {
    color: #bd00ff;
    text-decoration: none;
    font-weight: 600;
  }

  h1 {
    font-size: 40px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const OrgDevs = styled.div`
  display: flex;
  align-items: center;
`;

export const OrgNames = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  h3 {
    margin: 0;
  }
  P {
    margin: 0;
  }
`;

export const ImgeTech = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: 30px;
  }
`;
