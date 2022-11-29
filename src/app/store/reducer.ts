import { createReducer, on } from "@ngrx/store";
import { PostsStateInterface } from "../models/postState.interface";
import * as PostsActions from './action';

export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({...state, isLoading: true})),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: true,
    posts: action.posts,
  })),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: true,
    error: action.error
  })),
  on(PostsActions.addPost, (state, action) => ({
    ...state,
    isLoading: false,
    posts: [...state.posts, action.post]
  })));
