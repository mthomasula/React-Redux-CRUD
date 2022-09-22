import comments from "../apis/comments";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_COMMENT,
  FETCH_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENT,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createComment = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await comments.post("/comments", {
      ...formValues,
      userId,
    }); //the response contains a copy of the newly saved comment

    dispatch({ type: CREATE_COMMENT, payload: response.data });
    history.push("/");
  };
};

export const fetchComment = (id) => {
  return async (dispatch) => {
    const response = await comments.get(`/comments/${id}`);

    dispatch({ type: FETCH_COMMENT, payload: response.data });
  };
};

export const fetchComments = () => {
  return async (dispatch) => {
    const response = await comments.get("/comments");

    dispatch({ type: FETCH_COMMENTS, payload: response.data });
  };
};

export const editComment = (id, formValues) => {
  return async (dispatch) => {
    const response = await comments.patch(`/comments/${id}`, formValues);

    dispatch({ type: EDIT_COMMENT, payload: response.data });
    history.push("/");
  };
};

export const deleteComment = (id) => {
  return async (dispatch) => {
    await comments.delete(`comments/${id}`);

    dispatch({ type: DELETE_COMMENT, payload: id });
    history.push("/");
  };
};
