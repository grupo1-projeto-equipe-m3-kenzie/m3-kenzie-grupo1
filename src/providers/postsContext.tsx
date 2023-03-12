import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IComments,
  ICreatePost,
  IDefaultPropsChildren,
  IPost,
  IPostContext,
  IUser,
} from "./@types";
import { useNavigate } from "react-router-dom";

export const postsContext = createContext({} as IPostContext);
export const PostsProvider = ({ children }: IDefaultPropsChildren) => {
  const token = localStorage.getItem("@TokenUserAccess");
  const userId = localStorage.getItem("@userIdAccess");
  const postIdLocalStorage = localStorage.getItem("@postId");

  const [posts, setPosts] = useState([] as ICreatePost[]);
  const [infoUser, setInfoUser] = useState("");
  const [postId, setPostId] = useState(postIdLocalStorage);
  const [post, setPost] = useState({} as IPost[]);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

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
        navigate("/readPost");
        toast.success("post created successfully");
        console.log(response.data.id);
      } catch (error: any) {
        toast.error(error.response.data.message);
        navigate("/login");
        console.log(error);
      }
    }
  };

  async function getPostId() {
    const id = localStorage.getItem("@postId");
    console.log(id, "primeiro");
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      const post = localStorage.setItem("@postId", response.data.id);
      console.log(post);
      console.log(response.data);
      setPostId(id);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    console.log(id, "segundo");
  }

  async function renderPost() {
    console.log(postId, "render 1");
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      // console.log(response.data);
      setPost([response.data]);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    console.log(postId, "render 2");
  }

  async function submitComment(data: IComments) {
    const userId = localStorage.getItem("@userIdAccess");
    console.log("em teste");

    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      // console.log(response.data);
      updateComment(response.data, data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function updateComment(response: IUser, comments: IComments) {

    let newComment= {description:comments.description,name:response.name, img:response.img}
    
     
    console.log(newComment);
    
    let userComment= {comments:[newComment]}
    let data = {comments:post[0].comments}
    
    data.comments.push(newComment)
    console.log(data)
    

    try {
      const response = await api.patch(`/posts/${post[0].id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.info(`Comentário publicado com sucesso!`);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function userImage() {
    let userId = localStorage.getItem("@userIdAccess");
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      console.log(response.data);
      setImage(response.data.img);
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
        getPostId,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
