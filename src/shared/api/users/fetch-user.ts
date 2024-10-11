import axios, { CancelToken } from "axios";
import { TUser } from "../../types/user.ts";

export const fetchSingleUser = async (id: number, token?: CancelToken) => {
  const res = await axios.get<TUser>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cancelToken: token },
  );

  return res.data;
};
