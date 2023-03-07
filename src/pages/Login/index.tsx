import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./inputLogin";
import { useContext } from "react";
import { userContext } from "../../providers/userContext";
import imgBodyLogin from "../../assets/hero-home-1 1.png";
import { ImgBody } from "./style";
import { Form } from "./style";
import { Header } from "./style";
import logoAcess from "../../assets/Anchor-logo 1.png";
import { Link } from "react-router-dom";

const formSchemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatória"),
});
interface ILoginForm {
  email: string;
  password: string;
}
export function Login() {
  const { functionLogin } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <>
      <ImgBody src={imgBodyLogin} />
      <Header>
        <img src={logoAcess} /> <Link to="/register">Register</Link>
      </Header>
      <Form onSubmit={handleSubmit(functionLogin)}>
        <h1>Login</h1>
        <Input
          label="Email"
          errors={errors.email?.message}
          register={register("email")}
          type="email"
        />
        <Input
          label="Senha"
          errors={errors.password?.message}
          register={register("password")}
          type="password"
        />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
