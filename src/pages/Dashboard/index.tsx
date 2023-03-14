import { useContext } from "react";
import { FollowingPosts } from "../../components/FollowingPosts";
import { LastPostsList } from "../../components/LastPostsList";
import { userContext } from "../../providers/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardHeaderStyled, DashboardStyled, StyledLink } from "./style";
import { SearchPost } from "../../components/SearchPosts";
import { postsContext } from "../../providers/postsContext";
import { SearchListPosts } from "../../components/SearchListPosts";

export function Dashboard() {
  const { userLogin, userLogout } = useContext(userContext);
  const { searchListPosts } = useContext(postsContext);

  const navigate = useNavigate();

  useEffect(() => {
    const route = localStorage.getItem("@TokenUserAccess");
    if (!route) {
      navigate("/login");
    }
  }, []);

  return (
    <DashboardStyled>
      <DashboardHeaderStyled>
        <div>
          <img src={userLogin?.img} alt={userLogin?.name}></img>
          <h4>Olá, {userLogin?.name}</h4>
          <StyledLink to={"/CreatePost"}>+</StyledLink>
        </div>
        <button onClick={() => userLogout()}>LogOut</button>
      </DashboardHeaderStyled>
      <SearchPost />
      {searchListPosts.length !== 0 ? (
        <SearchListPosts />
      ) : (
        <>
          <LastPostsList />
          <FollowingPosts />
        </>
      )}
    </DashboardStyled>
  );
}
