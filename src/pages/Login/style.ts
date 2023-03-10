import styled from "styled-components";
export const SectionImg = styled.section`
  height: 160%;
  width: 100%;
  position: absolute;
  background-color: black;
`;
export const ImgBody = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  //filter: brightness(50%);
`;
export const Form = styled.form`
  width: 310px;
  //  height: 360px;
  position: absolute;
  top: 300px;
  left: 510px;
  color: black;
  background: #ffffff;
  border-radius: 10px;
  padding: 0px;
  padding-right: -10px;
  padding-bottom: 25px;
  margin: 0 auto;

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
    cursor: pointer;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: 102px;
  position: absolute;
  bottom: 990px;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    bottom: 970px;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }

  img {
    margin-top: 50px;
    width: 47px;
    height: 47px;
    margin-left: 20px;
  }
  a {
    margin-top: 58px;
    margin-left: 1100px;
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
