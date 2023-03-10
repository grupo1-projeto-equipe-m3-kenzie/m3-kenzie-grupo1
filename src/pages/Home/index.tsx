import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1> Em construção</h1>
      <p>Partiu codar!</p>
      <Link to={"/Login"}>Login</Link>
      <Link to={"/Register"}>Cadastro</Link>
    </>
  );
}
