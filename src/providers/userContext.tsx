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
  const [userLogin, setUserLogin] = useState<ILoginUser | null>(null);
  const [lastPosts, setLastPosts] = useState<IPosts[] | []>([]);
  const [followersPosts, setFollowersPosts] = useState<IPosts[] | []>([]);
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
      setFollowersPosts(response.data.user.following);
      setFollowingUsers(response.data.user.following);
      listLastPosts();
      navigate("/Dashboard");
    } catch (error: any) {
      toast.error("Usuário não encontrado");
      console.log(error.data);
    }
  };

  const functionRegister = async (data: IRegisterData) => {
    data.following = [];
    try {
      const response = await api.post("/register", data);
      navigate("/Dashboard");
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  async function getUser() {
    if (token && userLogedID) {
      try {
        const response = await api.get(`/users/${userLogedID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserLogin(response.data);
        setFollowersPosts(response.data.following);
        setFollowingUsers(response.data.following);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    }
  }

  async function listLastPosts() {
    try {
      const response = await api.get("/posts?_sort=id&_order=desc&_limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLastPosts(response.data);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function listFollowersPosts() {
    if (followingUsers.length !== 0) {
      const endPoint = followingUsers
        .map((followId) => `userId=${followId}&`)
        .join("");
      try {
        const response = await api.get(`/posts?${endPoint}`);
        setFollowersPosts(response.data);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    }
  }

  async function followUnfollowUser(id: number, name: string) {
    if (token) {
      const isFollowing = followingUsers.find((follow) => follow === id);
      if (Number(userLogedID) === id) {
        toast.info("Opa! Esse post pertence a você");
      } else if (isFollowing) {
        unfollowUser(isFollowing, name);
      } else {
        followUser(id, name);
      }
    }
  }

  async function followUser(id: number, name: string) {
    const newFollowingUsers = [...followingUsers, id];
    try {
      const data = { following: newFollowingUsers };
      const response = await api.patch(`/users/${userLogedID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFollowingUsers(newFollowingUsers);
      toast.success(`Você está seguindo ${name}`);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function unfollowUser(isFollowing: number, name: string) {
    const filterFollowing = followingUsers.filter(
      (user) => user !== isFollowing
    );
    try {
      const data = { following: filterFollowing };
      const response = await api.patch(`/users/${userLogedID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFollowingUsers(filterFollowing);
      toast.warning(`Você não está mais seguindo ${name}`);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  const userLogout = () => {
    setUserLogin(null);
    localStorage.removeItem("@TokenUserAccess");
    localStorage.removeItem("@userIdAccess");
    navigate("/");
  };

  useEffect(() => {
    if (token) {
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
        followersPosts,
        setFollowersPosts,
        userLogout,
        followUnfollowUser,
        followUser,
        unfollowUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
