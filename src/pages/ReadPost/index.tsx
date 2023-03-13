import { useContext, useEffect } from "react";
import { postsContext } from "../../providers/postsContext";
import { HeaderLoggedPages } from "../../components/HeaderLoggedPages";
import { Main } from "../../components/ReadPostPageComponents/Main";
import { NewCommentSection } from "../../components/ReadPostPageComponents/NewCommentSection";
import { PostComments } from "../../components/ReadPostPageComponents/PostComments";

export function ReadPost() {
  const {
    renderPost,
    getPostId,
    getUser,
    setUserFollowPost,
    followId,
    userImage,
  } = useContext(postsContext);

  useEffect(() => {
    getPostId();
    renderPost();
    setUserFollowPost(false);
    userImage();
  }, [followId]);

  useEffect(() => {
    getUser();
    setUserFollowPost(false);
  }, [followId]);

  return (
    <>
      <HeaderLoggedPages />
      <Main/>
      <NewCommentSection />
      <PostComments />
    </>
  );
}
