import { useFetchSinglePost } from "../../shared/api/posts/use-fetch-single-post.tsx";
import { useNavigate, useParams } from "react-router";
import { ErrorScreen } from "../../shared/ui/error-screen.tsx";
import { Undo } from "lucide-react";
import { useFetchSingleUser } from "../../shared/api/users/use-fetch-single-user.tsx";
import "./post-page.scss";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { post, error: postError } = useFetchSinglePost(id || "");
  const { user, error: userError } = useFetchSingleUser(post?.userId);
  const navigate = useNavigate();

  if (postError) {
    return <ErrorScreen title={"Произошла ошибка при получении поста"} />;
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
          src={"https://picsum.photos/1500/1500.jpg"}
          alt={"Картинка поста еще не прогрузилась"}
        />
        <div className={"post__text_content"}>
          <p>{post?.body}</p>
          <span>
            By: <b>{!userError && user?.name}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
