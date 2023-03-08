import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICreatePost, IDefaultPropsChildren, IPostContext } from "./@types";

export const postsContext = createContext({} as IPostContext);
export const PostsProvider = ({ children }: IDefaultPropsChildren) => {
  const token = localStorage.getItem("@TokenUserAccess");
  const userId = localStorage.getItem("@userIdAccess");

  const [posts, setPosts] = useState([] as ICreatePost[]);
  const [infoUser, setInfoUser] = useState("");
  const [postId, setPostId] = useState("");

  const functionPostRegister = async (data: ICreatePost) => {
    if (token) {
      try {
        const response = await api.post("/posts/", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts([...posts, response.data]);
        //console.log(response);
        setPostId(response.data.id);
        toast.success("post created successfully");
      } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }
  };

  const searchNameUser = async () => {
    if (token && userId) {
      try {
        const response = await api.get(`/users/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        //console.log(response);
        setInfoUser(response.data.name);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    searchNameUser();
  }, []);

  return (
    <postsContext.Provider
      value={{ posts, setPosts, functionPostRegister, setInfoUser, infoUser }}
    >
      {children}
    </postsContext.Provider>
  );
};
