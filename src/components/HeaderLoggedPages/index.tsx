import { useContext } from "react";
import { postsContext } from "../../providers/postsContext";


export function HeaderLoggedPages() {
  const { logOut, image } = useContext(postsContext);

  return (
    <>
    <header>
      <img src={image}></img>
      <button onClick={logOut}>LogOut</button>
    </header>
    </>
  );
}
