import axios, { CancelToken } from "axios";

export type TCreatePostRequest = {
  body: string;
  title: string;
  userId: number;
};

export const createPost = async (
  req: TCreatePostRequest,
  token: CancelToken,
) => {
  const res = await axios.post<TCreatePostRequest>(
    "https://jsonplaceholder.typicode.com/posts",
    req,
    { cancelToken: token },
  );

  return res.data;
};
