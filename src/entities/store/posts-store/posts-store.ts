import { action, makeAutoObservable } from "mobx";
import { TPost } from "../../../shared/types/post.ts";
import { fetchPosts } from "../../../shared/api/posts/fetch-posts.ts";
import axios from "axios";

class PostsStore {
  posts: TPost[] = [];
  isLoading: boolean = false;
  error: null | string = null;

  constructor() {
    makeAutoObservable(this);
  }

  addPost(newPost: TPost) {
    this.posts.push(newPost);
  }

  findPostById(id: number) {
    return this.posts.find((p) => p.id === id);
  }

  fetch() {
    this.isLoading = true;
    const cancellationToken = axios.CancelToken.source();
    fetchPosts(cancellationToken.token).then(
      action("fetchSuccess", (posts) => {
        // сделал поиском новых постов, да по сложности сложно,
        // но зато локальные посты не перетераем
        const newPosts = posts.filter(
          (post) => !this.posts.find((p) => p.id === post.id),
        );
        this.posts = this.posts.concat(newPosts);

        this.isLoading = false;
      }),
      action("fetchFailure", () => {
        this.error = "Произошла ошибка при получении постов";
      }),
    );
  }
}

export const postsStore = new PostsStore();
