import { createAction, props } from "@ngrx/store";
import { PostInterface } from "../models/post.interface";

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts succes',
  props<{posts: PostInterface[]}>()
);

export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{error: string}>()
);

export const addPost = createAction(
  '[Posts] Add Post',
  props<{ post: PostInterface}>()
);
