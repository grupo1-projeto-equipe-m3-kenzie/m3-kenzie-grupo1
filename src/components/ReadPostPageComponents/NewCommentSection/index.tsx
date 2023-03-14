import { useContext } from "react"
import * as yup from "yup";
import { postsContext } from "../../../providers/postsContext"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IComments } from "../../../providers/@types";
import { CommentTitle, NewCommentItemAlign } from "./Style";

export function NewCommentSection(){

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


    const {submitComment} = useContext(postsContext)
    return(
        <NewCommentItemAlign>
        <CommentTitle>Comentários</CommentTitle>
        <form onSubmit={handleSubmit(submitComment)}>
          <input
            type="text"
            placeholder="Deixe seu comentário..."
            {...register("description")}
          />
          <button type="submit">Comentar</button>
        </form>
      </NewCommentItemAlign>
    )
}