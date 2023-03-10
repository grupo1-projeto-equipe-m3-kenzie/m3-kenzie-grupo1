import { Axios } from "axios";
import { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { postsContext } from "../../providers/postsContext";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export function ReadPost() {
  const { postId, renderPost, post, image } = useContext(postsContext);

  renderPost();

  return (
    <>
      <div>
        <header>
          <img src={image} alt="imagem"></img>
          <div>
          <h3> {post[0]?.name} </h3>
          
          </div>

        </header>
        <p>{postId}</p>
      </div>
    </>
  );
}
