import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICreatePost, IDefaultPropsChildren, IPostContext } from "./@types";
// interface iUserPropsChildren {
//   children: React.ReactNode;
// }
// interface ICreatePost {
//   title: string;
//   state: string;
//   city: string;
//   country: string;
//   img: string;
//   description: string;
//   userId: number;
// }
// interface IvalueProps {
//   functionPostRegister: (data: ICreatePost) => void;
// }
export const postsContext = createContext({} as IPostContext);
export const PostsProvider = ({ children }: IDefaultPropsChildren) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@TokenUserAcess");
  const userId = localStorage.getItem("@userIdAcess");
  const [posts, setPosts] = useState([] as ICreatePost[]);
  const [infoUser, setInfoUser] = useState("");
  const [postTd, setPostId] = useState("");
  const functionPostRegister = async (data: ICreatePost) => {
    try {
      const response = await api.post("/posts/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts([...posts, response.data]);
      console.log(response);
      setPostId(response.data.id);
      toast.success("post created successfully");
      navigate("/ReadPost");
    } catch (error: any) {
      toast.error(error.response.data.message);
      navigate("/login");
      console.log(error);
    }
  };
  const searchNameUser = async () => {
    const token = localStorage.getItem("@TokenUserAcess");
    const userId = localStorage.getItem("@userIdAcess");
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      setInfoUser(response.data.name);
    } catch (error: any) {
      console.log(error);
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
