import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { useContext } from "react";
import { postsContext } from "../../providers/postsContext";

const formSchemaCreatePost = yup.object().shape({
  title: yup.string().required("Titulo obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  country: yup.string().required("País obrigatória"),
  img: yup.string().required("Imagem obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
});
interface ICreatePost {
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
}
export function CreatePost() {
  const { functionPostRegister } = useContext(postsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePost>({
    resolver: yupResolver(formSchemaCreatePost),
  });
  function onSubmit(data: ICreatePost) {
    console.log(data);
  }
  return (
    <>
      <header>
        <Link to="/login">Logout</Link>
      </header>
      <h1>Publique sua experiencia</h1>
      <form onSubmit={handleSubmit(functionPostRegister)}>
        <label>Titulo</label>
        <input type="text" {...register("title")} />
        {errors.title?.message}
        <label>Estado</label>
        <input type="text" {...register("state")} />
        {errors.state?.message}
        <label>Cidade</label>
        <input type="text" {...register("city")} />
        {errors.city?.message}
        <label>País</label>
        <input type="text" {...register("country")} />
        <p> {errors.country?.message}</p>

        <label>Adicionar imagem</label>
        <input type="text" {...register("img")} />
        <p>{errors.img?.message}</p>

        <label>Detalhe sua experiência aqui...</label>

        <textarea
          placeholder="Digite sua mensagem"
          value=""
          {...register("description")}
        >
        </textarea>
        {errors.description?.message}
        <button type="submit">Publicar</button>
      </form>
    </>
  );
}
