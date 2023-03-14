import { useContext } from "react";
import { postsContext } from "../../../providers/postsContext";
import { v4 as uuid } from "uuid";
import { PostCard, PostDescription, PostImage, PostList, PostUserName, TextAlign } from "./style";

export function PostComments(){

    const {allComments} = useContext(postsContext)

    return(

        <PostList>
    {allComments.comments?.map((element: any) => {
        return (
            <PostCard key={uuid()}>
          <PostImage src={element.img} alt="Uma Imagem" />
          <TextAlign>

          <PostUserName>{element.name}</PostUserName>
          <PostDescription>{element.description}</PostDescription>
          </TextAlign>
        </PostCard>
      );
    })}
  </PostList>
)
}