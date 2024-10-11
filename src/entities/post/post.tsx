import "./post.scss";
import { FC } from "react";
import { TPost } from "../../shared/types/post.ts";
import { useNavigate } from "react-router";

type Props = { post: TPost };

export const Post: FC<Props> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className={"post"} onClick={() => navigate(`/post/${post.id}`)}>
      <p className={"post_title"}>{post.title}</p>
    </div>
  );
};
