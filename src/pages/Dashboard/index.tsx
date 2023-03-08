import { useContext } from "react";
import { Link } from "react-router-dom";
import { dashboardContext } from "../../providers/dashboardContext";

export function Dashboard() {
  const { newPosts, followingUsers, viewPost } = useContext(dashboardContext);

  // localStorage.setItem(
  //   "@TokenUserAcess",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkdWFyZG9Aa2VuemllLmNvbSIsImlhdCI6MTY3ODE5NjQ5MCwiZXhwIjoxNjc4MjAwMDkwLCJzdWIiOiI1In0.TGbe8g1swFCXHyLq01X6KX3EdlosQYHvmBGuknnB08o"
  // );

  return (
    <>
      <ul>
        <h2>NOVIDADES</h2>
        {/* lógica semelhante a Kenzie Hub: {viewPost && <Post />} */}
        {newPosts.map((post) => (
          <li key={post.id}>
            <p>{post.name}</p>
            <img src={post.img} alt="imagem" />
            <p>{post.title}</p>
            <p>{post.state}</p>
            <p>{post.city}</p>
            <p>{post.country}</p>
            <p>{post.description}</p>
            <Link to={"/ReadPost"}>Abrir publicação</Link>
            {/* <button onClick={() => viewPost(post.id)}>Abrir publicação</button> */}
          </li>
        ))}
      </ul>

      {/* MAP dos posts de quem estiver seguindo */}
      <ul>
        <h2>SEGUINDO</h2>
        {followingUsers.map((follow) => (
          <li key={follow.id}>
            <p>{follow.name}</p>
            <img src={follow.img} alt="imagem" />
            <p>{follow.title}</p>
            <p>{follow.state}</p>
            <p>{follow.city}</p>
            <p>{follow.country}</p>
            <p>{follow.description}</p>
            <button onClick={() => viewPost(follow.id)}>
              Abrir publicação
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
