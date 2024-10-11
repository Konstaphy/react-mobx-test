import axios, { CancelToken } from "axios";
import { TPost } from "../../types/post.ts";

export const fetchSinglePost = async (id: string, token?: CancelToken) => {
  const res = await axios.get<TPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cancelToken: token },
  );

  return res.data;
};
