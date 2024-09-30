import { produce } from "immer";

import { Post } from "@/domains/Post";
import { ActionTypes } from "./action"

interface PostsState {
  posts: Array<Post>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export function postReducer(state: PostsState, action: any): PostsState {
  switch (action.type) {
    case ActionTypes.LOADING_POST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case ActionTypes.ERROR_POST:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case ActionTypes.ADD_NEW_POST:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        posts: produce(state.posts, (draft) => {
          draft.unshift(action.payload.post);
        }),
      }
    case ActionTypes.ADD_LIKE_TO_POST: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        posts: produce(state.posts, draft => {
          const index = state.posts.findIndex(p => p.id === action.payload.id)
          draft[index].likes += 1;
        })
      }
    }
    case ActionTypes.ADD_COMMENT_TO_POST: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        posts: produce(state.posts, draft => {
          const index = state.posts.findIndex(p => p.id === action.payload.id)
          draft[index].comments.push(action.payload.comment)
        })
      }
    }

    default:
      return state;
  }
}