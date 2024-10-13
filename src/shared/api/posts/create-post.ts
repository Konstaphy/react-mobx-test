import axios, { AxiosResponse, CancelToken } from "axios";
import { TPost } from "../../types/post.ts";

export type TCreatePostRequest = {
  body: string;
  title: string;
  userId: number;
};

export const createPost = async (
  req: TCreatePostRequest,
  token: CancelToken,
) => {
  const res = await axios.post<TCreatePostRequest, AxiosResponse<TPost>>(
    "https://jsonplaceholder.typicode.com/posts",
    req,
    { cancelToken: token },
  );

  return res.data;
};
