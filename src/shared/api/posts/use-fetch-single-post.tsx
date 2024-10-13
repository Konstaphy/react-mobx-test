import { useEffect, useState } from "react";
import { TPost } from "../../types/post.ts";
import axios from "axios";
import { fetchSinglePost } from "./fetch-single-post.ts";

export const useFetchSinglePost = (id: string) => {
  const [post, setPost] = useState<TPost | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      console.error(
        "Не указан айди при запросе за постом (Или локальный пост)",
      );
      return;
    }
    setIsLoading(true);
    const source = axios.CancelToken.source();
    fetchSinglePost(id, source.token)
      .then(setPost)
      .then(() => setIsLoading(false))
      .catch((e) => {
        if (e.message !== "canceled") {
          setError("При обрабботке запроса за постом произошла ошибка");
          console.error(e);
        }
      });
    return () => source.cancel();
  }, [id]);

  return { post, error, isLoading };
};
