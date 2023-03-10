import { useContext } from "react";
import { FollowingPosts } from "../../components/FollowingPosts";
import { LastPostsList } from "../../components/LastPostsList";
import { userContext } from "../../providers/userContext";
import { DashboardStyled } from "./style";

export function Dashboard() {
  const { userLogout } = useContext(userContext);

  return (
    <DashboardStyled>
      <button onClick={() => userLogout()}>Sair</button>
      <LastPostsList />
      <FollowingPosts />
    </DashboardStyled>
  );
}
