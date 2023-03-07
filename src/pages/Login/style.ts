import styled from "styled-components";
export const ImgBody = styled.img`
  width: 1600px;
  height: 841px;
  position: relative;
`;
export const Form = styled.form`
  width: 310px;
  //  height: 360px;
  position: absolute;
  top: 300px;
  left: 550px;
  color: black;
  background: #ffffff;
  border-radius: 10px;
  padding: 0px;
  padding-right: -10px;
  padding-bottom: 25px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 73px;
    display: flex;
    justify-content: center;
    color: #000000;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  button {
    width: 275px;
    height: 40px;
    background: #000000;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 48px;
    color: #ffffff;
    margin-left: 15px;
  }
`;
export const Header = styled.header`
  width: 1600px;
  height: 102px;
  position: absolute;
  bottom: 600px;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;

  img {
    margin-top: 50px;
    width: 47px;
    height: 47px;
  }
  a {
    margin-top: 58px;
    margin-left: 950px;
    text-decoration: none;
    color: #2d2d2d;
    font-family: "Inter";
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
