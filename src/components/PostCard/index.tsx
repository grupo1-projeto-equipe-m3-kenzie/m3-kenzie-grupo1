import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IPosts } from "../../providers/@types";
import { userContext } from "../../providers/userContext";

export const PostCard = ({
  id,
  userId,
  name,
  img,
  title,
  state,
  city,
  country,
  description,
}: IPosts) => {
  const { followUser } = useContext(userContext);

  const [following, setFollowing] = useState<string | "">("Seguir");

  function follow() {
    followUser(userId);
    if (following === "Seguir") {
      setFollowing("Seguindo");
    } else {
      setFollowing("Seguir");
    }
  }
  return (
    <li key={id}>
      <p>{name}</p>
      <button onClick={() => follow()}>{following}</button>
      <img src={img} alt="imagem" />
      <p>{title}</p>
      <p>{state}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{description}</p>
      <Link to={`/ReadPost/${id}`}>Abrir publicação</Link>
    </li>
  );
};
