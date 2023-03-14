import { useContext, useState } from "react";
import { postsContext } from "../../providers/postsContext";
import { SearchPostStyled } from "./style";

export const SearchPost = () => {
  const { searchPosts, searchListPosts, setSearchListPosts } =
    useContext(postsContext);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchPostStyled>
      <input
        placeholder="Procurar por..."
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <button onClick={() => searchPosts(searchTerm)}>Pesquisar</button>
      {searchListPosts.length !== 0 ? (
        <button onClick={() => setSearchListPosts([])}>Limpar</button>
      ) : null}
    </SearchPostStyled>
  );
};
