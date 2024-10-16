import { useFetchSinglePost } from "../../shared/api/posts/use-fetch-single-post.tsx";
import { useNavigate, useParams } from "react-router";
import { Loader, Undo } from "lucide-react";
import { useFetchSingleUser } from "../../shared/api/users/use-fetch-single-user.tsx";
import "./post-page.scss";
import { observer } from "mobx-react-lite";
import { FC } from "react";

export const PostPage: FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading } = useFetchSinglePost(id || "");

  const { user, error: userError } = useFetchSingleUser(post?.userId);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className={"centered-item"}>
        <Loader />
      </div>
    );
  }

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
            By: <b>{!!userError && user?.name}</b>
          </span>
        </div>
      </div>
    </div>
  );
});
