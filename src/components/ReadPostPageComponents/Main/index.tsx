import { useContext } from "react";
import { postsContext } from "../../../providers/postsContext";
import { Place, HeaderReadPost, MainRedPost, Name, PerfilPostImage, ButtonChangeFollow, PostImage, PostTitle, PostDescription } from "./style";

export function Main() {
  const {
    logOut,
    image,
    allComments,
    post,
    userFollowPost,
    unfollowUser,
    followUser,
    postOwnerId,
    userFollowing,
  } = useContext(postsContext);

  return (
    <MainRedPost>
      <HeaderReadPost>
        <PerfilPostImage src={allComments.img} alt="imagem"/>
        <div>
          <Name> {post[0]?.name} </Name>
          <div>
          <Place>{post[0]?.city}</Place>
          <Place>{post[0]?.state}</Place>
          </div>
        </div>
        {userFollowPost ? (
          <ButtonChangeFollow onClick={() => unfollowUser(postOwnerId, userFollowing)}>
            Seguindo{" "}
          </ButtonChangeFollow>
        ) : (
          <ButtonChangeFollow onClick={() => followUser(postOwnerId, userFollowing)}>
            Seguir{" "}
          </ButtonChangeFollow>
        )}
      </HeaderReadPost>
      <PostImage src={post[0]?.img}></PostImage>
      <PostTitle>{post[0]?.title}</PostTitle>
      <PostDescription>{post[0]?.description}</PostDescription>
    </MainRedPost>
  );
}
