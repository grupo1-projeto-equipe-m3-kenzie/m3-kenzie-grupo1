import { createContext, useState } from "react";
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
  const token = localStorage.getItem("@TokenUserAcess");
  const userId = localStorage.getItem("@userIdAcess");
  const [posts, setPosts] = useState([] as ICreatePost[]);
  const functionPostRegister = async (data: ICreatePost) => {
    try {
      const response = await api.post("/posts/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts([...posts, response.data]);

      // GetTechs();
      console.log(response);

      // toast.success("Technology registered successfully");
    } catch (error: any) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <postsContext.Provider value={{ posts, setPosts, functionPostRegister }}>
      {children}
    </postsContext.Provider>
  );
};
