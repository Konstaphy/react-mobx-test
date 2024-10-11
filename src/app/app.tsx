import "./app.scss";
import { PostsList } from "../pages/posts-list/posts-list.tsx";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../shared/ui/error-screen.tsx";
import { PostPage } from "../pages/post-page/post-page.tsx";

export function App() {
  return (
    <main className={"main"}>
      <Routes>
        <Route path={"/"} element={<PostsList />} />
        <Route path={"/post/:id"} element={<PostPage />} />
        <Route
          path={"*"}
          element={<ErrorScreen title={"404, Введен неправильный роут"} />}
        />
      </Routes>
    </main>
  );
}
