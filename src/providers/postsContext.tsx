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
  const [allComments, setAllComments] = useState({} as IPost)

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
        // console.log(response.data.id);
      } catch (error: any) {
        toast.error(error.response.data.message);
        navigate("/login");
        console.log(error);
      }
    }
  };

  async function getPostId() {
    const id = localStorage.getItem("@postId");
    
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      const post = localStorage.setItem("@postId", response.data.id);
     
      setPostId(id);
      setAllComments(response.data)
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    
  }

  async function renderPost() {
    
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
      
      setPost([response.data]);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    
  }

  async function submitComment(data: IComments) {
    const userId = localStorage.getItem("@userIdAccess");
   
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
    
      updateComment(response.data, data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  async function updateComment(postComments: IUser, comments: IComments) {

    let newComment= {description:comments.description,name:postComments.name, img:postComments.img}
    
     
    
    
    let userComment= {comments:[newComment]}
    let data = {comments:post[0].comments}
    
    data.comments.push(newComment)
    
    

    try {
      const response = await api.patch(`/posts/${post[0].id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.info(`Comentário publicado com sucesso!`);
      
      setAllComments(response.data)
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
        allComments,
        setAllComments
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
