import { useFetchSinglePost } from "../../shared/api/posts/use-fetch-single-post.tsx";
import { useNavigate, useParams } from "react-router";
import { ErrorScreen } from "../../shared/ui/error-screen.tsx";
import { Undo } from "lucide-react";
import { useFetchSingleUser } from "../../shared/api/users/use-fetch-single-user.tsx";
import "./post-page.scss";
import { generateSeed } from "../../shared/utils/generate-seed.ts";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { localPostsStore } from "../../shared/store/create-new-post-store/local-posts-store.ts";
import { TPost } from "../../shared/types/post.ts";

export const PostPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const localPost: TPost = localPostsStore.findPostById(parseFloat(id));
  const { post } = useFetchSinglePost(!localPost ? id || "" : "");

  const { user, error: userError } = useFetchSingleUser(post?.userId);
  const navigate = useNavigate();

  const [imageSeed] = useState<string>(generateSeed());

  return (
    <div className={"post_page"}>
      <div className={"header"}>
        <p>{!localPost ? post?.title : localPost.title}</p>
        <Undo size={"24px"} cursor={"pointer"} onClick={() => navigate("/")} />
      </div>
      <div className={"post_content"}>
        <img
          height={500}
          width={500}
          src={`https://picsum.photos/seed/${imageSeed}/1500/1500.jpg`}
          alt={"Картинка поста еще не прогрузилась"}
        />
        <div className={"post__text_content"}>
          <p>{!localPost ? post?.body : localPost.body}</p>
          <span>
            By: <b>{!localPost ? !userError && user?.name : "Ваш пост"}</b>
          </span>
        </div>
      </div>
    </div>
  );
});
