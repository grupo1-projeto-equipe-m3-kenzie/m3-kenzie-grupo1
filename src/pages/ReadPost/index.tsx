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
import { set } from "react-hook-form/dist/utils";

export function ReadPost() {
  const {
    postId,
    renderPost,
    post,
    image,
    submitComment,
    setPostId,
    getPostId,
  } = useContext(postsContext);

  useEffect(() => {
    getPostId();
    renderPost();
  }, []);

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

  return (
    <>
      <div>
        <header>
          <img src={image} alt="imagem"></img>
          <div>
            <h3> {post[0]?.name} </h3>
            <p>{post[0]?.city}</p>
            <p>{post[0]?.state}</p>
          </div>
          <button>Seguir</button>
        </header>
        <img src={post[0]?.img}></img>
        <h3>{post[0]?.title}</h3>
        <p>{post[0]?.description}</p>
      </div>

      <div>
        <h2>Comentários</h2>
        <form onSubmit={() => handleSubmit(submitComment)}>
          <input
            type="text"
            placeholder="Deixe seu comentário..."
            {...register("description")}
          />
          <button type="submit" onClick={(event) => event.preventDefault()}>
            Comentar
          </button>
        </form>
      </div>
    </>
  );
}
