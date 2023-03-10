import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { postsContext } from "../../providers/postsContext";
import { ICreatePost } from "../../providers/@types";
import imgChatLogo from "../../assets/messenger 1 (2).png"; //messenger 1.png
import imgEmailHeader from "../../assets/email 1 (2).png";
import imgButton from "../../assets/add-button 1 (2).png";
import { Header } from "./style";
import { Form } from "./style";
import { H1 } from "./style";
import { DivForm } from "./style";
import { DivBody } from "./style";

const formSchemaCreatePost = yup.object().shape({
  name: yup.string(),
  title: yup.string().required("Titulo obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  country: yup.string().required("País obrigatória"),
  img: yup.string().required("Imagem obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
});

export function CreatePost() {
  const { functionPostRegister } = useContext(postsContext);
  const { infoUser } = useContext(postsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePost>({
    resolver: yupResolver(formSchemaCreatePost),
  });

  const navigate = useNavigate();

  function onSubmit(data: ICreatePost) {
    console.log(data);
  }

  const route = localStorage.getItem("@TokenUserAccess");

  useEffect(() => {
    if (!route) {
      navigate("/login");
    }
  }, []);
  return (
    <DivBody>
      <Header>
        <img src={imgChatLogo} />
        <img src={imgEmailHeader} />
        <img src={imgButton} />
        <Link to="/login">Logout</Link>
      </Header>
      <DivForm>
        <H1>Publique sua experiencia</H1>

        <Form onSubmit={handleSubmit(functionPostRegister)}>
          <label>Seu nome</label>
          <input type="text" value={infoUser} disabled />
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
            {...register("description")}
          ></textarea>
          {errors.description?.message}
          <button type="submit">Publicar</button>
        </Form>
      </DivForm>
    </DivBody>
  );
}
