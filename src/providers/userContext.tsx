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
  const navigate = useNavigate();

  // Usuário logado
  const [userLogin, setUserLogin] = useState<ILoginUser | null>(null);
  // Lista dos últimos posts
  const [lastPosts, setLastPosts] = useState<IPosts[] | []>([]);
  // Lista dos posts seguindo
  const [followersPost, setFollowersPosts] = useState<IPosts[] | []>([]);
  // Lista de seguidores
  const [followingUsers, setFollowingUsers] = useState<number[] | []>([]);

  const token = localStorage.getItem("@TokenUserAccess");
  //const userLogedID = localStorage.getItem("@userIdAccess");

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
    const id = localStorage.getItem("@userIdAccess");
    if (id) {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TokenUserAccess")}`,
          },
        });
        setUserLogin(response.data);
        listFollowersPosts(response.data.following);
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

  async function listFollowersPosts(following: number[]) {
    const endPoint = following
      .map((followId) => `userId=${followId}&`)
      .join("");
    try {
      const response = await api.get(`/posts?${endPoint}`);
      setFollowersPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function followUser(id: number) {
    if (userLogin && token) {
      const ifFollowing = userLogin.following.find((idUser) => id === idUser);
      setFollowingUsers([...userLogin.following, id]);
      if (ifFollowing) {
        toast.error("Você já segue esse usuário");
      } else {
        try {
          const response = await api.patch(`/users/${userLogin.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              data: { following: followingUsers },
            },
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  // async function unfollowUser(id: number) {}

  const userLogout = () => {
    setUserLogin(null);
    localStorage.removeItem("@TokenUserAccess");
    localStorage.removeItem("@userIdAccess");
    navigate("/");
  };

  // useEffect(() => {
  //   const userToken = localStorage.getItem("@TokenUserAccess");
  //   if (userToken) {
  //     getUser();
  //     listLastPosts();
  //   }
  // }, []);

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
        followUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
