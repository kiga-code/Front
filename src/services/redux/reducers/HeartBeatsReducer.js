import { BPM, BPM_FAILED } from "../actions/actionTypes";

const initialState = {
  data: {},
  error: null
};
export default function heartReducer(state = initialState, action) {
  switch (action.type) {
    case BPM:
      return {
        ...state,
        data: action.payload
      };
    case BPM_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
