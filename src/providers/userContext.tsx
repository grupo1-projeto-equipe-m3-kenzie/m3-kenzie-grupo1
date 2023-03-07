import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface iUserPropsChildren {
  children: React.ReactNode;
}
interface ILoginForm {
  email: string;
  password: string;
}
interface IValueProps {
  functionLogin: (data: ILoginForm) => void;
  functionRegister: (data: iRegisterData) => void;
}
interface iLoginUser {
  id: string;
  name: string;
  email: string;
}

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
}

export const userContext = createContext({} as IValueProps);
export const UserProvider = ({ children }: iUserPropsChildren) => {
  const navigate = useNavigate();

  const [useLogin, setUserLogin] = useState({} as iLoginUser);
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

  const functionRegister = async (data: iRegisterData) => {
    try {
      const response = await api.post("/register", data);

      // let tokenUser = localStorage.setItem(
      //   "@TokenUserAcess",
      //   response.data.accessToken
      // );
      // let userId = localStorage.setItem("@userIdAcess", response.data.user.id);
      // setUserLogin(response.data.user);
      // navigate("/Dashboard");
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <userContext.Provider value={{ functionLogin, functionRegister }}>
      {children}
    </userContext.Provider>
  );
};
