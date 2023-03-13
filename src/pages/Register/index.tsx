import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "../../providers/userContext";
import logoAcess from "../../assets/Anchor-logo 1.png";
import imgBodyLogin from "../../assets/hero-home-1 1.png";
import { Background, ImgHero, ButtonLogin } from "./style";
import { Form } from "./style";
import { Header } from "./style";

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
  following?: number[] | [];
}

export function Register() {
  const { functionRegister } = useContext(userContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Você precisa colocar seu nome"),
    email: yup
      .string()
      .required("É obrigatório fornecer o email")
      .email("Coloque um email válido"),
    password: yup
      .string()
      .required("É obrigatório colocar uma senha")
      .min(6, "Senha tem que ter no mínimo 6 caracteres")
      .matches(/[a-z]/, "Senha tem que conter uma letra")
      .matches(/[a-z]/, "Senha tem que conter uma letra")
      .matches(/[A-Z]/, "Senha tem que conter uma letra maiúscula")
      .matches(/[0-9]/, "Senha tem que conter um número"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Os campos de senha devem ser iguais"),
    img: yup.string().required("É obrigatio colocar uma foto"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Background>
      <ImgHero src={imgBodyLogin} />
      <Header>
        <img src={logoAcess} />
        <ButtonLogin>Login</ButtonLogin>
      </Header>
      <Form className="formRegister" onSubmit={handleSubmit(functionRegister)}>
        <h2>Cadastro</h2>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
        </div>
        <p>{errors.name?.message}</p>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email..."
            {...register("email")}
          />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha..."
            {...register("password")}
          />
        </div>
        <p>{errors.password?.message}</p>
        <div>
          <label>Confirme sua senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha..."
            {...register("confirmPassword")}
          />
        </div>
        <p>{errors.password?.message}</p>
        <div>
          <label>Foto de Perfil</label>
          <input
            type="text"
            placeholder="insira o link da imagem"
            {...register("img")}
          />
        </div>
        <p>{errors.img?.message}</p>
        <button type="submit">Cadastrar</button>
      </Form>
    </Background>
  );
}
