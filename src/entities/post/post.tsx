import "./post.scss"
import { FC } from "react"
import { TPost } from "../../shared/types/post.ts"

export const Post: FC<{ post: TPost }> = ({ post }) => {
  return (
    <div
      className={"post"}
      style={{ backgroundImage: "url('https://picsum.photos/1500/1500.jpg')" }}
    >
      <p className={"post_title"}>{post.title}</p>
    </div>
  )
}
