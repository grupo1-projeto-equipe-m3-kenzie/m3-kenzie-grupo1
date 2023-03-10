import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IComments, ICreatePost, IDefaultPropsChildren, IPost, IPostContext } from "./@types";

export const postsContext = createContext({} as IPostContext);
export const PostsProvider = ({ children }: IDefaultPropsChildren) => {
  const token = localStorage.getItem("@TokenUserAccess");
  const userId = localStorage.getItem("@userIdAccess");

  const [posts, setPosts] = useState([] as ICreatePost[]);
  const [infoUser, setInfoUser] = useState("");
  const [postId, setPostId] = useState(0);
  const [post,setPost]= useState({} as IPost[])
  const [image,setImage] = useState("")

  const functionPostRegister = async (data: ICreatePost) => {
    data.name = infoUser;
    data.userId = Number(userId);
    if (token) {
      try {
        const response = await api.post("/posts/", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts([...posts, response.data]);
        setPostId(response.data.id);
        toast.success("post created successfully");
        console.log(response.data.id);
      } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }
  };



async function renderPost() {
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      // console.log(response.data);
     setPost([response.data])
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

async function submitComment(data:IComments){
 console.log("lalala")
}

  async function userImage() {
    let userId = localStorage.getItem("@userIdAccess")
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      console.log(response.data);
     setImage(response.data.img)
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

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
      value={{
        posts,
        setPosts,
        functionPostRegister,
        setInfoUser,
        infoUser,
        postId,
        setPostId,
        renderPost,
        post,
        setPost,
        image,
        userImage,
        submitComment,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
