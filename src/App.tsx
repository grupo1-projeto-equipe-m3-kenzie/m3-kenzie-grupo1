import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <AppRoutes />
    <ToastContainer />
  </>
);

export default App;
