import { useEffect, useState } from "react";
import { TPost } from "../../types/post.ts";
import axios from "axios";
import { fetchPosts } from "./fetch-posts.ts";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    fetchPosts(source.token)
      .then(setPosts)
      .then(() => setIsLoading(false))
      .catch((e) => {
        if (e.message !== "canceled") {
          setError("При обрабботке запроса за постами произошла ошибка");
          console.error(e);
        }
      });
    return () => source.cancel();
  }, []);

  return { posts, error, isLoading };
};
