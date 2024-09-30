import { Post } from "@/domains/Post";

export enum ActionTypes {
  ADD_NEW_POST = "ADD_NEW_POST",
  ADD_LIKE_TO_POST = "ADD_LIKE_TO_POST",
  ADD_COMMENT_TO_POST = "ADD_COMMENT_TO_POST",
  REMOVE_LIKE_FROM_POST = "REMOVE_LIKE_FROM_POST",
  LOADING_POST = "LOADING_POST",
  ERROR_POST = "ERROR_POST"
}

export function addNewPostAction(post: Post) {
  return {
    type: ActionTypes.ADD_NEW_POST,
    payload: {
      post,
    },
  };
}

export function addLikeToPost(id: string) {
  return {
    type: ActionTypes.ADD_LIKE_TO_POST,
    payload: {
      id,
    },
  };
}

export function addCommentToPost(id: string, comment: string) {
  return {
    type: ActionTypes.ADD_COMMENT_TO_POST,
    payload: {
      id,
      comment
    },
  };
}

export function removeLikeFromPost(id: string) {
  return {
    type: ActionTypes.REMOVE_LIKE_FROM_POST,
    payload: {
      id,
    },
  };
}

export function loadingPostAction() {
  return {
    type: ActionTypes.LOADING_POST,
  };
}

export function errorPostAction() {
  return {
    type: ActionTypes.ERROR_POST,
  };
}
