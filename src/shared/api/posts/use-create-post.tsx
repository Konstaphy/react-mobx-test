import { useState } from "react";
import axios from "axios";
import { createPost, TCreatePostRequest } from "./create-post.ts";
import { TPost } from "../../types/post.ts";

const source = axios.CancelToken.source();

export const useCreatePost = () => {
  const [error, setError] = useState<string | null>(null);

  const createPostMutation = async (
    req: TCreatePostRequest,
  ): Promise<TPost | null> => {
    return await createPost(req, source.token)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        if (e.message !== "canceled") {
          setError("При обработке создания поста произошла ошибка");
          console.error(e);
        }
        return null;
      });
  };
  return { createPostMutation, error, cancellationToken: source.token };
};
