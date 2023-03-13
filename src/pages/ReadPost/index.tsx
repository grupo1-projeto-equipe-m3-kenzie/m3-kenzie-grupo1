import { Axios } from "axios";
import { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { postsContext } from "../../providers/postsContext";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IComments } from "../../providers/@types";
import { HeaderLoggedPages } from "../../components/HeaderLoggedPages";
import { Main } from "../../components/ReadPostPageComponents/Main";
import { NewCommentSection } from "../../components/ReadPostPageComponents/NewCommentSection";

export function ReadPost() {
  const {
    postId,
    renderPost,
    post,
    image,
    submitComment,
    setPostId,
    getPostId,
    allComments,
    setAllComments,
    getUser,
    userFollowing,
    setUserFollowing,
    userFollowPost,
    setUserFollowPost,
    followId,
    followUser,
    postOwnerId,
    unfollowUser,
    userImage,
    logOut,
  } = useContext(postsContext);

  
  useEffect(() => {
    getPostId();
    renderPost();
    setUserFollowPost(false);
    userImage()
  }, [followId]);
  
  useEffect(() => {
    getUser();
    setUserFollowPost(false);
  }, [followId]);
  
  const formSchema = yup.object().shape({
    description: yup.string().required("O comentário não pode estar vazio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComments>({
    resolver: yupResolver(formSchema),
  });

  console.log(userFollowing);
  

  return (
    <>
<HeaderLoggedPages/>

<main>
      <header>
        <img src={allComments.img} alt="imagem"></img>
        <div>
          <h3> {post[0]?.name} </h3>
          <p>{post[0]?.city}</p>
          <p>{post[0]?.state}</p>
        </div>
        {userFollowPost ? (
          <button onClick={() => unfollowUser(postOwnerId, userFollowing)}>
            Seguindo{" "}
          </button>
        ) : (
          <button onClick={() => followUser(postOwnerId, userFollowing)}>
            Seguir{" "}
          </button>
        )}
      </header>
      <img src={post[0]?.img}></img>
      <h3>{post[0]?.title}</h3>
      <p>{post[0]?.description}</p>
    </main>
      <div>
        <h2>Comentários</h2>
        <form onSubmit={handleSubmit(submitComment)}>
          <input
            type="text"
            placeholder="Deixe seu comentário..."
            {...register("description")}
          />
          <button type="submit">Comentar</button>
        </form>
      </div>
      <ul>
        {allComments.comments?.map((element: any) => {
          return (
            <li key={uuid()}>
              <img src={element.img} alt="Uma Imagem" />
              <p>{element.name}</p>
              <p>{element.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}