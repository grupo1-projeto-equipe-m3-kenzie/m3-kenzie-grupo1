import { useContext } from "react";
import { postsContext } from "../../providers/postsContext";
import { ButtonLogOut, HeaderReadPost, PerfilImage } from "./style";


export function HeaderLoggedPages() {
  const { logOut, image } = useContext(postsContext);

  return (
    <>
    <HeaderReadPost >
      <PerfilImage src={image}/>
      <ButtonLogOut onClick={logOut}>LogOut</ButtonLogOut>
    </HeaderReadPost>
    </>
  );
}
