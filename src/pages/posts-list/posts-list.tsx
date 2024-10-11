import { FC, useState } from "react";
import { ErrorScreen } from "../../shared/ui/error-screen.tsx";
import { useFetchPosts } from "../../shared/api/posts/use-fetch-posts.tsx";
import "./posts-list.scss";
import { Post } from "../../entities/post/post.tsx";
import { Pen } from "lucide-react";
import { Modal } from "../../shared/ui/modal/modal.tsx";
import { CreatePostModal } from "../../features/create-post/create-post.tsx";

// в доке указано 100 постов выдается, лимиты и страницы там не нашел
// сделал 12 постов на странице, чтобы выглядело красивее (по 3 поста на строчку)
const PAGE_COUNT = Math.ceil(100 / 12);
const PAGES = Array.from(Array(PAGE_COUNT).keys());

export const PostsList: FC = () => {
  const { posts, error } = useFetchPosts();
  const [page, setPage] = useState(0);
  const [isModalOpened, setModalOpened] = useState<boolean>(false);

  // Специально делаю отдельный скрин для ошибки при этом запросе,
  // потому что этот функционал - ядро проекта
  if (error) {
    return <ErrorScreen title={error} />;
  }

  return (
    <div className={"posts"}>
      <div className={"posts_header"}>
        <h1 className={"posts_title"}>Предложка</h1>
        <button className={"posts_create"} onClick={() => setModalOpened(true)}>
          <p>Новый пост</p>
          <Pen size={14} />
        </button>
      </div>
      <section className={"posts_list"}>
        {posts.slice(12 * page, 12 + 12 * page).map((p) => (
          <Post post={p} key={p.id} />
        ))}
      </section>
      <nav className={"pagination"}>
        {PAGES.map((p) => (
          <span
            key={p}
            onClick={() => setPage(p)}
            className={p === page ? "page__active" : ""}
          >
            {p + 1}
          </span>
        ))}
      </nav>
      {isModalOpened && (
        <Modal closeModal={() => setModalOpened(false)}>
          <CreatePostModal onClose={() => setModalOpened(false)} />
        </Modal>
      )}
    </div>
  );
};
