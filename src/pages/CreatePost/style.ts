import styled from "styled-components";
export const Header = styled.header`
  width: 1600px;
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
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 1134px;
  height: 1191px;
  margin-left: 40px;

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
`;
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 1191px;
  margin-left: 50px;
  background-color: #ffff;
  margin-left: 250px; // align-items: center;
`;
export const DivBody = styled.div`
  width: 100vw;

  background: #d9d9d9;

  textarea {
    width: 800px;
    height: 100px;
    border-radius: 4px;
    background: #d9d9d9;
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
