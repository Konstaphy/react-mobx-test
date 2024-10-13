import "./create-post.scss";
import { FC } from "react";
import { X } from "lucide-react";
import { observer } from "mobx-react-lite";
import { createNewPostStore } from "../../entities/store/create-new-post-store/create-new-post-store.ts";
import { useCreatePost } from "../../shared/api/posts/use-create-post.tsx";
import { localPostsStore } from "../../entities/store/local-posts-store/local-posts-store.ts";

type Props = {
  onClose: VoidFunction;
};

export const CreatePostModal: FC<Props> = observer(({ onClose }) => {
  // связал с mobx, чтобы данные не исчезали при выходе из модалки
  // конечно, можно было просто в пропсы/форму/контекст вынести,
  // но раз надо заиспользовать стейт менеджер, запилил
  const { createPostMutation } = useCreatePost();

  return (
    <div className={"create_post_modal"}>
      <div className={"create_post_modal__header"}>
        <h2>Создать пост</h2>
        <X cursor={"pointer"} size={24} onClick={onClose} />
      </div>
      <div className={"create_post_modal__content"}>
        <p>Заголовок поста</p>
        <input
          value={createNewPostStore.title}
          onChange={(e) => createNewPostStore.setTitle(e.target.value)}
          placeholder={"Title"}
        />
        <p>Что вы хотите написать?</p>
        <textarea
          value={createNewPostStore.body}
          onChange={(e) => createNewPostStore.setBody(e.target.value)}
          placeholder={"Body"}
        />
      </div>
      <div className={"create_post_handler"}>
        <button
          onClick={() =>
            createPostMutation({
              title: createNewPostStore.title,
              body: createNewPostStore.body,
              userId: 1,
            }).then((res) => {
              if (res) {
                localPostsStore.addPost(res);
                createNewPostStore.setTitle("");
                createNewPostStore.setBody("");
                onClose();
              }
            })
          }
        >
          <p>Отправить</p>
        </button>
      </div>
    </div>
  );
});
