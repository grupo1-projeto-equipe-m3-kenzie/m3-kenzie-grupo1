import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { CreatePost } from "../pages/CreatePost";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { ReadPost } from "../pages/ReadPost";
import { Register } from "../pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {" "}
      </Route>
      <Route path="/CreatePost" element={<CreatePost />}>
        {" "}
      </Route>
      <Route path="/Dashboard" element={<Dashboard />}>
        {" "}
      </Route>
      <Route path="/Login" element={<Login />}>
        {" "}
      </Route>
      <Route path="/ReadPost" element={<ReadPost />}>
        {" "}
      </Route>
      <Route path="/Register" element={<Register />}>
        {" "}
      </Route>
    </Routes>
  );
}
