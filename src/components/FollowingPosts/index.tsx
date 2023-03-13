import { useContext, useEffect } from "react";
import { userContext } from "../../providers/userContext";
import { PostCard } from "../PostCard";
import { FollowingPostsStyled } from "./style";

export const FollowingPosts = () => {
  const { followingUsers, followersPosts, listFollowersPosts } =
    useContext(userContext);

  useEffect(() => {
    listFollowersPosts();
  }, [followingUsers]);

  return (
    <div>
      <h2>SEGUINDO</h2>
      <FollowingPostsStyled>
        {followersPosts.length === 0 ? (
          <p>Você não está seguindo ninguém</p>
        ) : (
          followersPosts.map((follow) => (
            <PostCard
              key={follow.id}
              id={follow.id}
              name={follow.name}
              userId={follow.userId}
              img={follow.img}
              title={follow.title}
              state={follow.state}
              city={follow.city}
              country={follow.country}
              description={follow.description}
            />
          ))
        )}
      </FollowingPostsStyled>
    </div>
  );
};
