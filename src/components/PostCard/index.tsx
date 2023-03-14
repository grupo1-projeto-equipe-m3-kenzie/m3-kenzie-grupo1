import { useContext } from "react";
import { IPosts } from "../../providers/@types";
import { postsContext } from "../../providers/postsContext";
import { userContext } from "../../providers/userContext";
import {
  ImagePostStyled,
  ImageUserStyled,
  PostCardStyled,
  PostContentStyled,
  PostHeader,
  StyledLink,
  UserDataStyled,
  UserLocationStyled,
} from "./style";

export const PostCard = ({
  id,
  userId,
  name,
  img,
  title,
  state,
  city,
  country,
  description,
}: IPosts) => {
  const { followingUsers, followUnfollowUser } = useContext(userContext);
  const { setPostId } = useContext(postsContext);

  return (
    <PostCardStyled>
      <PostHeader>
        <ImageUserStyled>{/* <img src={img}></img> */}</ImageUserStyled>
        <UserDataStyled>
          <h3>{name}</h3>
          <UserLocationStyled>
            <p>{state} •</p>
            <p>&nbsp;{city} •</p>
            <p>&nbsp;{country}</p>
          </UserLocationStyled>
          {followingUsers.find((follow) => follow === userId) ? (
            <button onClick={() => followUnfollowUser(userId, name)}>
              Seguindo
            </button>
          ) : (
            <button onClick={() => followUnfollowUser(userId, name)}>
              Seguir
            </button>
          )}
        </UserDataStyled>
      </PostHeader>
      <PostContentStyled>
        <ImagePostStyled>
          <img src={img} alt="imagem" />
        </ImagePostStyled>
        <h4>{title}</h4>
        <p>{description}</p>
        <StyledLink to={"/ReadPost"} onClick={() => setPostId(String(id))}>
          Abrir publicação
        </StyledLink>
      </PostContentStyled>
    </PostCardStyled>
  );
};
