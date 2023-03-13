import { Link } from "react-router-dom";
import imgBodyLogin from "../../assets/hero-home-1 1.png";
import logoAcess from "../../assets/Anchor-logo 1.png";
import {
  Header,
  Background,
  ImgHero,
  TextHero,
  DevContri,
  OrgDevs,
  OrgNames,
  ImgeTech,
} from "./style";
import LogoReact from "../../assets/logo-react-1024.svg";
import LogoGit from "../../assets/Git-logo.svg";
import LogoType from "../../assets/typescript-logo.svg";
import LogoStyled from "../../assets/styled-components-logo.svg";
import LogoHook from "../../assets/react-hook-form-logo.svg";
import IconCaio from "../../assets/Caio-icon.svg";
import IconEduardo from "../../assets/Eduardo-icon.svg";
import IconRobs from "../../assets/Robson-icon.svg";
import IconPedro from "../../assets/Pedro-icon.svg";

export function Home() {
  return (
    <>
      <Background>
        <Header>
          <img src={logoAcess} />
          <Link to={"/Login"}>Login</Link>
          <Link to={"/Register"}>Cadastro</Link>
        </Header>
        <ImgHero src={imgBodyLogin} />
        <TextHero>
          <h1>Encontre as melhores viagens aqui na Access.</h1>
          <p>
            Aqui você encontra as melhores opções para uma boa viagem
            einformações para poder ter uma nova aventura, encontre
            depoimentosde pessoas.
          </p>
        </TextHero>
      </Background>
      <DevContri>
        <h1>Projeto realizado usando as seguintes ferramentas:</h1>
        <ImgeTech>
          <img src={LogoReact} />
          <img src={LogoGit} />
          <img src={LogoType} />
          <img src={LogoStyled} />
          <img src={LogoHook} />
        </ImgeTech>
        <div>
          <h1>Desenvolvedores do Projeto:</h1>
          <ul>
            <li>
              <OrgDevs>
                <img src={IconRobs} />
                <OrgNames>
                  <h3>Robson Luna</h3>
                  <p>Desenvolvedor Front-end</p>
                  <div>
                    <a href="https://github.com/Robson-Luna-BR">GitHub</a>
                    <span> | </span>
                    <a href="hhttps://www.linkedin.com/in/robson-luna/">
                      Linkedin
                    </a>
                  </div>
                </OrgNames>
              </OrgDevs>
            </li>
            <li>
              <OrgDevs>
                <img src={IconCaio} />
                <OrgNames>
                  <h3>Caio Henrique</h3>
                  <p>Desenvolvedor Front-end</p>
                  <div>
                    <a href="https://github.com/Robson-Luna-BR">GitHub</a>
                    <span> | </span>
                    <a href="hhttps://www.linkedin.com/in/robson-luna/">
                      Linkedin
                    </a>
                  </div>
                </OrgNames>
              </OrgDevs>
            </li>
            <li>
              <OrgDevs>
                <img src={IconEduardo} />
                <OrgNames>
                  <h3>Eduardo Kucek</h3>
                  <p>Desenvolvedor Front-end</p>
                  <div>
                    <a href="https://github.com/Robson-Luna-BR">GitHub</a>
                    <span> | </span>
                    <a href="hhttps://www.linkedin.com/in/robson-luna/">
                      Linkedin
                    </a>
                  </div>
                </OrgNames>
              </OrgDevs>
            </li>
            <li>
              <OrgDevs>
                <img src={IconPedro} />
                <OrgNames>
                  <h3>Pedro Costa</h3>
                  <p>Desenvolvedor Front-end</p>
                  <div>
                    <a href="https://github.com/Robson-Luna-BR">GitHub</a>
                    <span> | </span>
                    <a href="hhttps://www.linkedin.com/in/robson-luna/">
                      Linkedin
                    </a>
                  </div>
                </OrgNames>
              </OrgDevs>
            </li>
          </ul>
        </div>
      </DevContri>
    </>
  );
}
