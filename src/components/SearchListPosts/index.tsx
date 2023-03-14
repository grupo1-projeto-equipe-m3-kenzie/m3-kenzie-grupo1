import { useContext } from "react";
import { postsContext } from "../../providers/postsContext";
import { PostCard } from "../PostCard";
import { v4 as uuid } from "uuid";
import { SearchListPostContainerStyled, SearchListPostsStyled } from "./style";

export const SearchListPosts = () => {
  const { searchListPosts } = useContext(postsContext);

  return (
    <SearchListPostContainerStyled>
      <SearchListPostsStyled>
        {searchListPosts.map((post) => (
          <PostCard
            key={uuid()}
            id={Number(post.id)}
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
      </SearchListPostsStyled>
    </SearchListPostContainerStyled>
  );
};
