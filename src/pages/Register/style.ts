import styled from "styled-components";

export const Background = styled.section`
  background-color: black;
  height: 2300px;
  width: 1067px;

  @media (min-width: 1920px) {
    width: 100%;
  }
`;

export const ImgHero = styled.img`
  width: 1067px;
  height: 100%;
  @media (min-width: 1920px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  width: 900px;
  height: 1500px;
  position: absolute;
  top: 332px;
  left: 86px;
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
    width: 760px;
    height: 120px;

    border-radius: 10px;
    background-color: #dcdcdc;
    border: none;

    font-size: 50px;
    padding-left: 30px;
  }
  label {
    font-size: 70px;
    padding-bottom: 25px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    display: flex;
    justify-content: center;
    color: #000000;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  button {
    width: 760px;
    height: 120px;
    background: #000000;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 48px;
    color: #ffffff;
    margin-top: 30px;
  }

  @media (min-width: 1920px) {
    width: 400px;
    height: 904px;
    position: absolute;
    top: 332px;
    left: 720px;

    input {
      width: 260px;
      height: 60px;

      border-radius: 10px;
      margin-bottom: 20px;
      background-color: #dcdcdc;
      border: none;

      font-size: 20px;
      padding-left: 30px;
    }
    label {
      font-size: 30px;
      padding-bottom: 10px;
    }

    h2 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 73px;
      display: flex;
      justify-content: center;
      color: #000000;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    button {
      width: 260px;
      height: 60px;
      background: #000000;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 48px;
      color: #ffffff;
      margin-top: 20px;
    }
  }
`;
export const Header = styled.header`
  width: 1067px;
  height: 170px;
  position: absolute;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 130px;
    height: 130px;
  }
  a {
    width: 325px;
    height: 90px;
    background: white;
    border-radius: 4px;
    border: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 48px;
    color: black;
    font-family: "Inter", sans-serif;
    margin-right: 30px;
    text-decoration: none;
  }

  @media (min-width: 1920px) {
    width: 1900px;
    height: 102px;
    position: absolute;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
      height: 60px;
      margin-left: 30px;
    }
    a {
      width: 172px;
      height: 46px;
      background: white;
      border-radius: 4px;
      border: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 48px;
      color: black;
      font-family: "Inter", sans-serif;
      margin-right: 30px;
      text-decoration: none;
    }
  }
`;
