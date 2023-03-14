import styled from "styled-components";

export const NewCommentItemAlign = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: var(--grey-4);
`;



export const InputForm = styled.input`
  background-color: var(--grey-2);
  position: relative;
  width: 100%;
  height:64px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius:8px;
  padding:20px;
  color: var(--grey-4);
  font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 150%;
  ::placeholder {
  color:var(--grey-3);
  }
`

export const ButtonComment = styled.button`
margin-top:18px;
background-color:var(--button-1);
border:none;
outline:none;
color:var(--grey-0);
width:158px;
height:46px;
border-radius:8px;
`
