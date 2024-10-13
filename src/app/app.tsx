import "./app.scss";
import { PostsList } from "../pages/posts-list/posts-list.tsx";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../shared/ui/error-screen.tsx";
import { PostPage } from "../pages/post-page/post-page.tsx";
import { LocalPostPage } from "../pages/local-post-page/local-post-page.tsx";

export function App() {
  return (
    <main className={"main"}>
      <Routes>
        <Route path={"/"} element={<PostsList />} />
        <Route path={"/post/:id"} element={<PostPage />} />
        {/* Самому это особо не нравится, но для полноты картины лучше сделать
            По хорошему конечно с норм бекендом работать, который сохраняет то,
            что ты отправляешь xd */}
        <Route path={"/localpost/:id"} element={<LocalPostPage />} />
        <Route
          path={"*"}
          element={<ErrorScreen title={"404, Введен неправильный роут"} />}
        />
      </Routes>
    </main>
  );
}
