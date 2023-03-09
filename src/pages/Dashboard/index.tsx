import { useContext } from "react";
import { PostCard } from "../../components/PostCard";
import { userContext } from "../../providers/userContext";

export function Dashboard() {
  const { lastPosts, followersPost, userLogout } = useContext(userContext);

  return (
    <>
      <button onClick={() => userLogout()}>Sair</button>
      <ul>
        <h2>NOVIDADES</h2>
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
      </ul>
      <ul>
        <h2>SEGUINDO</h2>
        {followersPost.map((follow) => (
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
        ))}
      </ul>
    </>
  );
}
