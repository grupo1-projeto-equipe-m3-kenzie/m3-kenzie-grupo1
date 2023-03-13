import styled from "styled-components";
export const SectionImg = styled.section`
  background-color: black;
  height: 100%;
`;
export const ImgBody = styled.img`
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  width: 310px;
  height: 360px;
  position: absolute;
  top: 300px;
  left: 753px;
  color: black;
  background: #ffffff;
  border-radius: 10px;
  padding: 0px;
  padding-right: -10px;
  padding-bottom: 25px;
  margin: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  fieldset {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    left: 410px;
  }
  @media (max-width: 1000px) {
    left: 310px;
  }
  @media (max-width: 850px) {
    left: 210px;
  }
  @media (max-width: 680px) {
    left: 130px;
  }
  @media (max-width: 565px) {
    left: 80px;
  }
  @media (max-width: 468px) {
    left: 40px;
  }
  @media (max-width: 368px) {
    left: 0px;
    width: 100%;
    max-width: 100%;
  }
  h1 {
    font-family: "Inter", sans-serif;
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
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 48px;
    color: #ffffff;
    margin-top: 20px;
    cursor: pointer;
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
  @media (max-width: 1300px) {
    bottom: 970px;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }

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

    @media (max-width: 1300px) {
      margin-left: 900px;
    }
    @media (max-width: 1100px) {
      margin-left: 800px;
    }
    @media (max-width: 967px) {
      margin-left: 700px;
    }
    @media (max-width: 866px) {
      margin-left: 600px;
    }
    @media (max-width: 766px) {
      margin-left: 500px;
    }
    @media (max-width: 670px) {
      margin-left: 400px;
    }
    @media (max-width: 577px) {
      margin-left: 300px;
    }
    @media (max-width: 469px) {
      margin-left: 200px;
    }
    @media (max-width: 368px) {
      margin-left: 100px;
    }
  }
`;
