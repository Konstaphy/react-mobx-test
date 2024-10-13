import { makeAutoObservable } from "mobx";

class CreateNewPostStore {
  title = "";
  body = "";

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setBody(newBody: string) {
    this.body = newBody;
  }
}

export const createNewPostStore = new CreateNewPostStore();
