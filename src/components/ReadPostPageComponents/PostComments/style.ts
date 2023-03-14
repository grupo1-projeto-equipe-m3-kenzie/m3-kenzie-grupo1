import styled from "styled-components";

export const PostList =styled.ul`
margin-top:22px;
width:100%;
box-sizing:border-box;
display:flex;
flex-direction:column;
gap:18px;
`

export const PostCard = styled.li`
width:100%;
padding:37px 18px 23px 18px;
background-color:var(--grey-2);
box-sizing:border-box;
display:flex;
flex-direction:column;
border-radius:10px;
@media(min-width: 766px){
    flex-direction:row;
    
}
`

export const PostImage = styled.img`
height:115px;
width:115px;
border-radius:50%;
`

export const PostUserName = styled.p`
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 36px;
color:var(--grey-4);
`

export const PostDescription = styled.p`
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 30px;
color: var(--grey-3);
`

export const TextAlign = styled.div`
@media(min-width: 766px){
    margin-left:15px;
}
`