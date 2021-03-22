import {
  CHANGE_SEARCH_FIELD,
  LOAD_ROBOTS_FAILED,
  LOAD_ROBOTS_PENDING,
  LOAD_ROBOTS_SUCCESS,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

//HOF
export const getRobots = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_ROBOTS_PENDING });

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    dispatch({ type: LOAD_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_ROBOTS_FAILED, payload: error });
  }
};
