import { useContext } from "react"
import * as yup from "yup";
import { postsContext } from "../../../providers/postsContext"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IComments } from "../../../providers/@types";
import { ButtonComment, CommentTitle, InputForm, NewCommentItemAlign } from "./Style";

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
          <InputForm
            type="textarea"
            placeholder="Deixe seu comentário..."
            {...register("description")}
          />
          <ButtonComment type="submit">Comentar</ButtonComment>
        </form>
      </NewCommentItemAlign>
    )
}