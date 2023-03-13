import { useContext } from "react";
import { postsContext } from "../../../providers/postsContext";

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
    <main>
      <header>
        <img src={allComments.img} alt="imagem"></img>
        <div>
          <h3> {post[0]?.name} </h3>
          <p>{post[0]?.city}</p>
          <p>{post[0]?.state}</p>
        </div>
        {userFollowPost ? (
          <button onClick={() => unfollowUser(postOwnerId, userFollowing)}>
            Seguindo{" "}
          </button>
        ) : (
          <button onClick={() => followUser(postOwnerId, userFollowing)}>
            Seguir{" "}
          </button>
        )}
      </header>
      <img src={post[0]?.img}></img>
      <h3>{post[0]?.title}</h3>
      <p>{post[0]?.description}</p>
    </main>
  );
}
