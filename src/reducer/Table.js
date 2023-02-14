import { ADD_DATA, REMOVE_DATA, CHANGE_STATUS } from "../action/action-types";

const initialState = [];

const Table = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case REMOVE_DATA:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_STATUS:
      return state.map((content, i) => content.id === action.payload ? {...content, status: "completed"} : content)  
    default:
      return state;
  }
}

export default Table;