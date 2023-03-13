import { useContext } from "react";
import { userContext } from "../../providers/userContext";
import { PostCard } from "../PostCard";
import { LastPostStyled } from "./style";

export const LastPostsList = () => {
  const { lastPosts } = useContext(userContext);
  return (
    <div>
      <h2>NOVIDADES</h2>
      <LastPostStyled>
        {lastPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            name={post.name}
            img={post.img}
            title={post.title}
            state={post.state}
            city={post.city}
            country={post.country}
            description={post.description}
          />
        ))}
      </LastPostStyled>
    </div>
  );
};
