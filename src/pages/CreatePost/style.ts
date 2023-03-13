import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 55px;
  background: rgba(3, 3, 3, 0.2);
  border-bottom: 2px solid #ffffff;
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
    padding-left: 10px;
  }

  a {
    margin-left: 1100px;
    border: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;
    background: #ff0000;
    text-align: center;
    text-decoration: none;
    color: white;
    border-radius: 4px;

    @media (max-width: 1200px) {
      margin-left: 850px;
    }
    @media (max-width: 1090px) {
      margin-left: 750px;
    }
    @media (max-width: 980px) {
      margin-left: 650px;
    }
    @media (max-width: 885px) {
      margin-left: 550px;
    }
    @media (max-width: 780px) {
      margin-left: 450px;
    }
    @media (max-width: 680px) {
      margin-left: 350px;
    }
    @media (max-width: 580px) {
      margin-left: 250px;
    }
    @media (max-width: 480px) {
      margin-left: 150px;
    }
    @media (max-width: 380px) {
      margin-left: 50px;
    }
    @media (max-width: 280px) {
      margin-left: 0px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 1134px;
  height: 1191px;
  margin-left: 40px;
  @media (max-width: 1300px) {
    max-width: 100%;
    width: 100%;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    color: #020202;
  }
  input {
    width: 800px;
    height: 30px;
    background: #d9d9d9;
    border-radius: 4px;
    @media (max-width: 950px) {
      width: 650px;
    }
    @media (max-width: 850px) {
      width: 550px;
    }
    @media (max-width: 745px) {
      width: 450px;
    }
    @media (max-width: 640px) {
      width: 350px;
    }
    @media (max-width: 540px) {
      width: 250px;
    }
    @media (max-width: 540px) {
      width: 150px;
    }
  }
`;
export const H1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 73px;
  // margin-left: 220px;
  color: #000000;
  margin-left: 40px;
  @media (max-width: 1300px) {
    max-width: 100%;
    width: 100%;
    @media (max-width: 640px) {
      font-size: 30px;
    }
    @media (max-width: 580px) {
      font-size: 25px;
    }
    @media (max-width: 440px) {
      font-size: 20px;
    }
  }
`;
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 940px;
  margin-left: 50px;
  background-color: #ffff;
  margin-left: 250px; // align-items: center;
  @media (max-width: 1300px) {
    margin: 0 auto;
  }
  @media (max-width: 950px) {
    margin: 0 auto;
    width: 800px;
  }
  @media (max-width: 850px) {
    margin: 0 auto;
    width: 700px;
  }
  @media (max-width: 745px) {
    margin: 0 auto;
    width: 600px;
  }
  @media (max-width: 640px) {
    margin: 0 auto;
    width: 500px;
  }
  @media (max-width: 540px) {
    margin: 0 auto;
    width: 400px;
  }

  @media (max-width: 440px) {
    margin: 0 auto;
    width: 300px;
  }
`;
export const DivBody = styled.div`
  width: 100%;

  background: #d9d9d9;

  textarea {
    width: 800px;
    height: 100px;
    border-radius: 4px;
    background: #d9d9d9;
    @media (max-width: 950px) {
      width: 650px;
    }
    @media (max-width: 850px) {
      width: 550px;
    }
    @media (max-width: 745px) {
      width: 450px;
    }
    @media (max-width: 640px) {
      width: 350px;
    }
    @media (max-width: 540px) {
      width: 250px;
    }
    @media (max-width: 540px) {
      width: 150px;
    }
  }

  button {
    width: 200px;
    height: 45px;
    background: #39ac11;
    margin-top: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    border-radius: 4px;
    color: #ffffff;
  }
`;
