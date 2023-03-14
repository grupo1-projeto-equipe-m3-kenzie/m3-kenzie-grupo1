import styled from "styled-components";

export const MainRedPost = styled.main`
margin:0 2.5vw;
margin-top:34px;
height:100%;
padding-bottom:26px;
background-color: var(--grey-0);
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px;


`

export const HeaderReadPost = styled.header`
display:flex;
flex-direction: column;
padding:28px;
align-items:center;
@media(min-width:767px){
    flex-direction:row;
    padding: 28px 0 28px 0;
    margin: 0 2.5vw;
    justify-content: space-between;
    width:90%;
}
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

export const HedaerItemAlign = styled.div`
display:flex;
flex-direction:column;

@media(min-width: 766px){
    flex-direction:row;
    justify-content:space-between;
}
`

export const HeaderTextAlign = styled.div`
@media(min-width: 766px){
    margin-left:10px;
}
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
max-width:240px;
margin-top:24px;
`

export const PostImage = styled.img`
width: 90%;
height:auto;
max-height:622px;
`

export const PostTitle = styled.h3`
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 150%;
margin-top:32px; 
width:90%;
color:var(--grey-4);
`

export const PostDescription = styled.p`
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 150%;
color: var(--grey-3);
width:90%;
`