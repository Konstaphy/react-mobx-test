import { makeAutoObservable } from "mobx";
import { TPost } from "../../../shared/types/post.ts";

class LocalPostsStore {
  localPosts: TPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPost(newPost: TPost) {
    this.localPosts.push(newPost);
  }

  findPostById(id: number) {
    return this.localPosts.find((p) => p.id === id);
  }
}

export const localPostsStore = new LocalPostsStore();
