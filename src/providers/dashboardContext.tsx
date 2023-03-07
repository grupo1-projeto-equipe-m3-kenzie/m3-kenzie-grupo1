import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  IDashboardContext,
  IDefaultPropsChildren,
  IPosts,
  IUser,
} from "./@types";

export const dashboardContext = createContext({} as IDashboardContext);

export function DashboardProvider({ children }: IDefaultPropsChildren) {
  const [user, setUser] = useState<IUser | null>(null); // usuário logado
  const [newPosts, setNewPosts] = useState<IPosts[] | []>([]); // novos posts
  const [followingUsers, setFollowingUsers] = useState<IPosts[] | []>([]); // PATCH do user.follow
  //const [viewPost, setViewPost] = useState(null);

  const navigate = useNavigate();

  async function getUser() {
    try {
      const response = await api.get("users/5", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      setUser(response.data);
      getFollowing(response.data.following);
    } catch (error) {
      console.log(error);
    }
  }

  async function listNewPosts() {
    try {
      const response = await api.get("posts?_sort=id&_order=desc&_limit=5", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      setNewPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFollowing(user: []) {
    const endPoint = user.map((followId) => `userId=${followId}&`).join("");
    try {
      const response = await api.get(`posts?${endPoint}`);
      setFollowingUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function viewPost(id: number) {
    navigate("/ReadPost");
  }

  useEffect(() => {
    getUser();
    listNewPosts();
  }, []);

  return (
    <dashboardContext.Provider
      value={{
        newPosts,
        setNewPosts,
        listNewPosts,
        getUser,
        user,
        setUser,
        followingUsers,
        setFollowingUsers,
        getFollowing,
        viewPost,
      }}
    >
      {children}
    </dashboardContext.Provider>
  );
}
