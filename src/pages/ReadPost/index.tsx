import { Axios } from "axios";
import { v4 as uuid } from "uuid";
import { api } from "../../services/api";

export function ReadPost() {

  const userID = 1;
  const postNumber = 2;

  async function post() {
    try {
      const response = await api.get("/posts?_sort=id&_order=desc&_limit=1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TokenUserAcess")}`,
        },
      });
     
    } catch (error) {
      console.log(error);
    }
  }


  

  return (
    <>
      <h1> Em construção</h1>
      <p>Partiu codar!</p>
    </>
  );
}
