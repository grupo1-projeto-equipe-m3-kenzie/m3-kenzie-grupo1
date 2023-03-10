import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IDefaultPropsChildren,
  ILoginForm,
  ILoginUser,
  IPosts,
  IRegisterData,
  IUserContext,
} from "./@types";

export const userContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultPropsChildren) => {
  // Usuário logado
  const [userLogin, setUserLogin] = useState<ILoginUser | null>(null);
  // Lista dos últimos posts
  const [lastPosts, setLastPosts] = useState<IPosts[] | []>([]);
  // Lista dos posts seguindo
  const [followersPost, setFollowersPosts] = useState<IPosts[] | []>([]);
  // Lista de seguidores
  const [followingUsers, setFollowingUsers] = useState<number[] | []>([]);

  const token = localStorage.getItem("@TokenUserAccess");
  const userLogedID = localStorage.getItem("@userIdAccess");

  const navigate = useNavigate();

  const functionLogin = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);
      localStorage.removeItem("@TokenUserAccess");
      localStorage.removeItem("@userIdAccess");
      localStorage.setItem("@TokenUserAccess", response.data.accessToken);
      localStorage.setItem("@userIdAccess", response.data.user.id);
      setUserLogin(response.data.user);
      listLastPosts();
      listFollowersPosts(response.data.user.following);
      setFollowersPosts(response.data.user.following);
      setFollowingUsers(response.data.user.following);
      navigate("/Dashboard");
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  const functionRegister = async (data: IRegisterData) => {
    try {
      const response = await api.post("/register", data);
      // let tokenUser = localStorage.setItem(
      //   "@TokenUserAcess",
      //   response.data.accessToken
      // );
      // let userId = localStorage.setItem("@userIdAcess", response.data.user.id);
      // setUserLogin(response.data.user);
      navigate("/Dashboard");
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  async function getUser() {
    if (userLogedID) {
      try {
        const response = await api.get(`/users/${userLogedID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserLogin(response.data);
        listFollowersPosts(response.data.following);
        setFollowingUsers(response.data.following);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function listLastPosts() {
    try {
      const response = await api.get("/posts?_sort=id&_order=desc&_limit=5", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLastPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function listFollowersPosts(listFollowinUsers: number[]) {
    if (listFollowinUsers.length > 0) {
      const endPoint = listFollowinUsers
        .map((followId) => `userId=${followId}&`)
        .join("");
      try {
        const response = await api.get(`/posts?${endPoint}`);
        setFollowersPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function followUnfollowUser(id: number, name: string) {
    if (userLogin && token) {
      const isFollowing = followingUsers.find((element) => element === id);
      if (isFollowing === id) {
        unfollowUser(id, name);
      } else {
        followUser(id, name);
      }
    }
  }

  async function followUser(id: number, name: string) {
    setFollowingUsers([...followingUsers, id]);
    try {
      const response = await api.get(`/users/${userLogedID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { following: followingUsers },
      });
      toast.success(`Você está seguindo ${name}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function unfollowUser(isFollowing: number, name: string) {
    const filterFollowing = followingUsers.filter(
      (user) => user !== isFollowing
    );
    try {
      const response = await api.get(`/users/${userLogedID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { following: filterFollowing },
      });
      setFollowingUsers(filterFollowing);
      toast.warning(`Você não segue mais ${name}`);
    } catch (error) {
      console.log(error);
    }
    console.log(followingUsers);
  }

  const userLogout = () => {
    setUserLogin(null);
    localStorage.removeItem("@TokenUserAccess");
    localStorage.removeItem("@userIdAccess");
    navigate("/");
  };

  useEffect(() => {
    const userToken = localStorage.getItem("@TokenUserAccess");
    if (userToken) {
      getUser();
      listLastPosts();
    }
  }, []);

  return (
    <userContext.Provider
      value={{
        userLogin,
        setUserLogin,
        functionLogin,
        functionRegister,
        lastPosts,
        setLastPosts,
        listLastPosts,
        followingUsers,
        setFollowingUsers,
        listFollowersPosts,
        followersPost,
        setFollowersPosts,
        userLogout,
        followUnfollowUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
