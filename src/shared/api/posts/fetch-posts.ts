import axios, { CancelToken } from "axios"
import { TPost } from "../../types/post.ts"

export const fetchPosts = async (token?: CancelToken) => {
  const res = await axios.get<TPost[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { cancelToken: token },
  )

  return res.data
}
