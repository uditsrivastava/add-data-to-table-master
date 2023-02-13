import { ADD_DATA, REMOVE_DATA, CHANGE_STATUS } from "./action-types";

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const removeData = (id) => ({
  type: REMOVE_DATA,
  payload: id,
});

export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  payload: id
});