import styled from "styled-components";

export const MainRedPost = styled.main`
margin:0 2.5vw;
margin-top:34px;
height:100%;
padding-bottom:26px;
background-color: var(--grey-0);
`

export const HeaderReadPost = styled.header`
display:flex;
flex-direction: column;
padding:28px;
align-items:center;
`

export const PerfilPostImage = styled.img`
height:175px;
width:175px;
border-radius:50%;
margin-top:28px;
`

export const Name = styled.h3`
font-weight: 500;
font-size: 50px;
line-height: 61px;
color: var(--grey-4);
margin-top:24px;
`

export const Place = styled.p`
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 36px;
margin-top:24px;
`

export const ItemAlign = styled.div`
display:flex;
gap:15px;
`

export const ButtonChangeFollow = styled.button`
padding:0 5px;
text-align:center;
border:none;
outline:none;
background-color: var(--grey-4);
color: var(--grey-0);
font-weight: 700;
font-size: 30px;
line-height: 36px;
border-radius:8px;
height:62px;
width: 100%;
max-width:315px;
margin-top:24px;
`