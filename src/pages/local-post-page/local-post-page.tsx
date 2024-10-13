import { useNavigate, useParams } from "react-router";
import { Undo } from "lucide-react";
import "../post-page/post-page.scss";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { postsStore } from "../../entities/store/posts-store/posts-store.ts";

export const LocalPostPage: FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const post = postsStore.findPostById(parseFloat(id || ""));

  const navigate = useNavigate();

  return (
    <div className={"post_page"}>
      <div className={"header"}>
        <p>{post?.title}</p>
        <Undo size={"24px"} cursor={"pointer"} onClick={() => navigate("/")} />
      </div>
      <div className={"post_content"}>
        <img
          height={500}
          width={500}
          src={`https://picsum.photos/seed/${post?.title}/1500/1500.jpg`}
          alt={"Картинка поста еще не прогрузилась"}
        />
        <div className={"post__text_content"}>
          <p>{post?.body}</p>
          <span>
            By: <b>You</b>
          </span>
        </div>
      </div>
    </div>
  );
});
