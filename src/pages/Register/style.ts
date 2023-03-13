import styled from "styled-components";

export const Background = styled.section`
  background-color: black;
  height: 100%;
`;

export const ImgHero = styled.img`
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  width: 310px;
  position: absolute;
  top: 200px;
  left: 757px;
  color: black;
  background: #ffffff;
  border-radius: 10px;
  padding: 0px;
  padding-right: -10px;
  padding-bottom: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }

  input {
    width: 260px;
    height: 40px;

    border-radius: 8px;
    background-color: #dcdcdc;
    border: none;
  }
  label {
    padding-bottom: 5px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 73px;
    display: flex;
    justify-content: center;
    color: #000000;
    margin-top: 10px;
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
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 48px;
    color: #ffffff;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 47px;
    height: 47px;

    margin-left: 10px;
    padding-right: 1600px;
  }
  a {
    width: 125px;
    height: 40px;
    background: white;
    border-radius: 4px;
    border: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 48px;
    color: black;
    font-family: "Inter", sans-serif;
    margin-right: 30px;
    text-decoration: none;
  }
`;
