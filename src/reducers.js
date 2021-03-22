import {
  CHANGE_SEARCH_FIELD,
  LOAD_ROBOTS_FAILED,
  LOAD_ROBOTS_PENDING,
  LOAD_ROBOTS_SUCCESS,
} from "./constants";

const initialStateSearch = { searchField: "" };

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // const { search } = payload;
    // return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

//getRobots THUNK
const initialStateRobots = { isPending: false, robots: [], error: "" };

export const getRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case LOAD_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case LOAD_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case LOAD_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });

    default:
      return state;
  }
};
