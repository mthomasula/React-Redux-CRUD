import _ from "lodash";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_COMMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_COMMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_COMMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_COMMENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
