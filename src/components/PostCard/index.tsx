import { useContext } from "react";
import { Link } from "react-router-dom";
import { IPosts } from "../../providers/@types";
import { postsContext } from "../../providers/postsContext";
import { userContext } from "../../providers/userContext";
import { PostCardStyled } from "./style";

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
      <p>{name}</p>
      {followingUsers.find((follow) => follow === userId) ? (
        <button onClick={() => followUnfollowUser(userId, name)}>
          Seguindo
        </button>
      ) : (
        <button onClick={() => followUnfollowUser(userId, name)}>Seguir</button>
      )}
      <img src={img} alt="imagem" />
      <p>{title}</p>
      <p>{state}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{description}</p>
      <Link to={"/ReadPost"} onClick={() => setPostId(String(id))}>
        Abrir publicação
      </Link>
    </PostCardStyled>
  );
};
