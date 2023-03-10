import { useContext } from "react";
import { FollowingPosts } from "../../components/FollowingPosts";
import { LastPostsList } from "../../components/LastPostsList";
import { userContext } from "../../providers/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const { lastPosts, followersPost, userLogout } = useContext(userContext);
  const navigate = useNavigate();
  //const route = localStorage.getItem("@tokenUserAcess"); //@tokenUserAcess
  useEffect(() => {
    const route = localStorage.getItem("@TokenUserAccess");
    if (!route) {
      navigate("/login");
      console.log(route);
    }
  }, []);

  return (
    <DashboardStyled>
      <button onClick={() => userLogout()}>Sair</button>
      <LastPostsList />
      <FollowingPosts />
    </DashboardStyled>
  );
}
