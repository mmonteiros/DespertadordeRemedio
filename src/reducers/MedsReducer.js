import { MEDS_DELETE, MEDS_FETCH, MEDS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  meds: [],
  unsubscribe: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MEDS_DELETE:
      return state;

    case MEDS_FETCH:
      return INITIAL_STATE;

    case MEDS_FETCH_SUCCESS:
      return {
        loading: false,
        meds: action.payload.meds,
        unsubscribe: action.payload.unsubscribe
      };

    default:
      return state;
  }
};
