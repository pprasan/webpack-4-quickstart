import {ActionTypes} from "../constants/action-types";

const initialState = {
  articles: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ARTICLE:
      return {articles: [...state.articles, action.payload]};
    default:
      return state;
  }
};