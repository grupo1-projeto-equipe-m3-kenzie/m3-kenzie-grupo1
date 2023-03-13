import { useContext } from "react";
import { FollowingPosts } from "../../components/FollowingPosts";
import { LastPostsList } from "../../components/LastPostsList";
import { userContext } from "../../providers/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardStyled } from "./style";

export function Dashboard() {
  const { userLogout } = useContext(userContext);
  const navigate = useNavigate();
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
