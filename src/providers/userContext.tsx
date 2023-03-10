import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IDefaultPropsChildren,
  ILoginForm,
  ILoginUser,
  IRegisterData,
  IUserContext,
} from "./@types";
// interface iUserPropsChildren {
//   children: React.ReactNode;
// }
// interface ILoginForm {
//   email: string;
//   password: string;
// }
// interface IValueProps {
//   functionLogin: (data: ILoginForm) => void;
//   functionRegister: (data: iRegisterData) => void;
// }
// interface iLoginUser {
//   id: string;
//   name: string;
//   email: string;
// }

// interface iRegisterData {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   img: string;
// }

export const userContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultPropsChildren) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({} as ILoginUser);

  const functionLogin = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);

      let tokenUser = localStorage.setItem(
        "@TokenUserAcess",
        response.data.accessToken
      );
      let userId = localStorage.setItem("@userIdAcess", response.data.user.id);
      setUserLogin(response.data.user);
      navigate("/Dashboard");
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  const functionRegister = async (data: IRegisterData) => {
    try {
      const response = await api.post("/register", data);

      // let tokenUser = localStorage.setItem(
      //   "@TokenUserAcess",
      //   response.data.accessToken
      // );
      // let userId = localStorage.setItem("@userIdAcess", response.data.user.id);
      // setUserLogin(response.data.user);

      console.log(response);
      let tokenUser = localStorage.setItem(
        "@tokenUserAcess",
        response.data.accessToken
      );
      let userId = localStorage.setItem("@userIdAcess", response.data.user.id);
      navigate("/Dashboard");
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{ userLogin, setUserLogin, functionLogin, functionRegister }}
    >
      {children}
    </userContext.Provider>
  );
};
