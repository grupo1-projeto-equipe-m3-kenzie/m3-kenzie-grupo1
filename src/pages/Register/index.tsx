import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "../../providers/userContext";

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
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

  function onSubmit(data: iRegisterData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(functionRegister)}>
      <h2>Cadastro</h2>
      <label>Nome</label>
      <input
        type="text"
        placeholder="Digite seu nome..."
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <label>Email</label>
      <input
        type="email"
        placeholder="Digite seu email..."
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <label>Confirme sua senha</label>
      <input
        type="password"
        placeholder="Confirme sua senha..."
        {...register("confirmPassword")}
      />
      <p>{errors.password?.message}</p>
      <label>Foto de Perfil</label>
      <input
        type="text"
        placeholder="insira o link da imagem"
        {...register("img")}
      />
      <p>{errors.img?.message}</p>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
