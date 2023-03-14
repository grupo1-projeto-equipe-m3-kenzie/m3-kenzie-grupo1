import styled from "styled-components";

export const Header = styled.header`
  width: 1027px;
  height: 170px;
  padding-bottom: 30px;
  position: absolute;
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-top: 21px;
    margin-right: 70px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #2d2d2d;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    background-color: #ffff;
    border-radius: 6px;
  }

  img {
    width: 150px;
    height: 160px;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    width: 1198px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1920px) {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: 20px;
      width: 50px;
      height: 50px;
    }

    a {
      margin-top: 21px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      background-color: #ffff;
      padding: 7px 7px 7px 7px;
      border-radius: 6px;
    }
  }
  @media (min-width: 1320px) {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: 20px;
      width: 50px;
      height: 50px;
    }

    a {
      margin-top: 21px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      background-color: #ffff;
      padding: 7px 7px 7px 7px;
      border-radius: 6px;
    }
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: 20px;
      width: 50px;
      height: 50px;
    }

    a {
      margin-top: 21px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      background-color: #ffff;
      padding: 7px 7px 7px 7px;
      border-radius: 6px;
    }
  }
`;

export const BoxButton = styled.div`
  height: 130px;
  display: flex;
  align-items: center;

  a {
    margin-top: 21px;
    margin-right: 70px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #2d2d2d;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 30px;
    background-color: #ffff;
    padding-left: 13px;
    padding-right: 13px;
    border-radius: 6px;
    padding-top: 35px;
    padding-bottom: 35px;
  }

  @media (min-width: 1920px) {
    height: 60px;
    display: flex;
    align-items: center;

    a {
      margin-top: 45px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 30px;
      background-color: #ffff;
      padding-left: 13px;
      padding-right: 13px;
      border-radius: 6px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  @media (min-width: 1320px) {
    height: 60px;
    display: flex;
    align-items: center;

    a {
      margin-top: 45px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 30px;
      background-color: #ffff;
      padding-left: 13px;
      padding-right: 13px;
      border-radius: 6px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  @media (min-width: 1280px) {
    height: 60px;
    display: flex;
    align-items: center;

    a {
      margin-top: 45px;
      margin-right: 70px;
      margin-bottom: 20px;
      text-decoration: none;
      color: #2d2d2d;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      background-color: #ffff;
      padding-left: 13px;
      padding-right: 13px;
      border-radius: 6px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
`;

export const Background = styled.section`
  background-color: black;
  width: 1058px;
  height: 1080px;

  @media (min-width: 768px) {
    width: 1199px;
  }

  @media (min-width: 1920px) {
    width: 100%;
    height: 600px;
  }
  @media (min-width: 1320px) {
    width: 100%;
    height: 600px;
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: 600px;
  }
`;

export const ImgHero = styled.img`
  width: 1060px;
  height: 1080px;

  @media (min-width: 768px) {
    width: 1195px;
  }

  @media (min-width: 1920px) {
    width: 100%;
    height: 600px;
  }
  @media (min-width: 1320px) {
    width: 100%;
    height: 600px;
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: 600px;
  }
`;

export const TextHero = styled.div`
  position: absolute;
  top: 224px;
  left: -218px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 1027px;
    color: white;
    text-align: center;
    font-size: 80px;
    margin: 0;
    margin-bottom: 40px;
    margin-left: 170px;
  }

  p {
    width: 1027px;
    color: white;
    font-size: 60px;
    text-align: center;
    margin: 0;
    margin-left: 160px;
  }
  @media (min-width: 768px) {
    position: absolute;
    top: 403px;
    left: 137px;
  }
  @media (min-width: 1920px) {
    position: absolute;
    top: 170px;
    left: -67px;

    h1 {
      width: 1252px;
      color: white;
      text-align: center;
      font-size: 80px;
      margin: 0;
      margin-bottom: 40px;
      margin-left: 170px;
    }

    p {
      width: 1027px;
      color: white;
      font-size: 30px;
      text-align: center;
      margin: 0;
      margin-left: 160px;
    }
  }

  @media (min-width: 1320px) {
    position: absolute;
    top: 202px;
    left: -98px;

    h1 {
      width: 1252px;
      color: white;
      text-align: center;
      font-size: 80px;
      margin: 0;
      margin-bottom: 40px;
      margin-left: 170px;
    }

    p {
      width: 1027px;
      color: white;
      font-size: 30px;
      text-align: center;
      margin: 0;
      margin-left: 160px;
    }
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 256px;
    left: -163px;

    h1 {
      width: 1252px;
      color: white;
      text-align: center;
      font-size: 30px;
      margin: 0;
      margin-bottom: 40px;
      margin-left: 170px;
    }

    p {
      width: 950px;
      color: white;
      font-size: 20px;
      text-align: center;
      margin: 0;
      margin-left: 160px;
    }
  }
`;

export const DevContri = styled.section`
  background-color: #d9d9d9;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;

  width: 1029px;

  li {
    width: 1000px;
    list-style: none;
    padding-right: 30px;
    margin-bottom: 30px;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  a {
    color: #bd00ff;
    text-decoration: none;
    font-weight: 600;
    font-size: 40px;
  }

  h1 {
    font-size: 70px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 40px;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    width: 1171px;
  }
  @media (min-width: 1920px) {
    width: 1873px;

    ul {
      padding: 0;
      display: flex;
      flex-direction: row;
    }

    a {
      color: #bd00ff;
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;
    }

    h1 {
      font-size: 40px;
      font-weight: 300;
      margin: 0;
      margin-bottom: 40px;
      margin-top: 30px;
    }
  }
  @media (min-width: 1320px) {
    width: 1873px;

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    a {
      color: #bd00ff;
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;
    }

    h1 {
      font-size: 40px;
      font-weight: 300;
      margin: 0;
      margin-bottom: 40px;
      margin-top: 30px;
    }
  }
  @media (min-width: 1280px) {
    width: 1410px;

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    a {
      color: #bd00ff;
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;
    }

    h1 {
      font-size: 40px;
      font-weight: 300;
      margin: 0;
      margin-bottom: 40px;
      margin-top: 30px;
    }
  }
`;

export const OrgDevs = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 205px;
  }

  @media (min-width: 1920px) {
    img {
      width: 120px;
    }
  }
`;

export const OrgNames = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  h3 {
    font-size: 80px;
    margin: 0;
  }
  P {
    margin: 0;
    font-size: 50px;
  }

  span {
    font-size: 50px;
  }

  @media (min-width: 1920px) {
    h3 {
      font-size: 30px;
      margin: 0;
    }
    P {
      margin: 0;
      font-size: 20px;
    }

    span {
      font-size: 30px;
    }
  }

  @media (min-width: 1320px) {
    h3 {
      font-size: 30px;
      margin: 0;
    }
    P {
      margin: 0;
      font-size: 20px;
    }

    span {
      font-size: 30px;
    }
  }
`;

export const ImgeTech = styled.div`
  display: flex;
  align-items: center;

  width: 900px;
  img {
    padding-right: 60px;
  }
`;
