import { useContext } from "react";
import { postsContext } from "../../../providers/postsContext";
import { v4 as uuid } from "uuid";

export function PostComments(){

    const {allComments} = useContext(postsContext)

    return(

        <ul>
    {allComments.comments?.map((element: any) => {
        return (
            <li key={uuid()}>
          <img src={element.img} alt="Uma Imagem" />
          <p>{element.name}</p>
          <p>{element.description}</p>
        </li>
      );
    })}
  </ul>
)
}