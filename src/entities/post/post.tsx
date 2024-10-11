import "./post.scss";
import { FC, useState } from "react";
import { TPost } from "../../shared/types/post.ts";
import { useNavigate } from "react-router";
import { generateSeed } from "../../shared/utils/generate-seed.ts";

type Props = { post: TPost };

export const Post: FC<Props> = ({ post }) => {
  const navigate = useNavigate();
  const [imageSeed] = useState<string>(generateSeed());
  return (
    <div
      className={"post"}
      style={{
        backgroundImage: `url("https://picsum.photos/seed/${imageSeed}/1500/1500.jpg")`,
      }}
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <p className={"post_title"}>{post.title}</p>
    </div>
  );
};
