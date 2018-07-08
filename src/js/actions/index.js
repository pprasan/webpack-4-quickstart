import {ActionTypes} from "../constants/action-types";

export const addArticle = article => ({
  type: ActionTypes.ADD_ARTICLE,
  payload: article
});