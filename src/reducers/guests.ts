import {
  ADD_ADDULT,
  REMOVE_ADULT,
  ADD_KID,
  REMOVE_KID,
} from "../actions/guestsActions";
import { GuestsTypes } from '../types/GuestsTypes';

const initialState: GuestsTypes = {
  adults: 2,
  kids: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ADDULT: {
      return { ...state, adults: state.adults + 1 };
    }

    case REMOVE_ADULT: {
      return { ...state, adults: state.adults - 1 };
    }

    case ADD_KID: {
      return { ...state, kids: state.kids + 1 };
    }

    case REMOVE_KID: {
      return { ...state, kids: state.kids - 1 };
    }

    default:
      return state;
  }
};

export default reducer;

export const getKids = (state) => state.kids
export const getAdults = (state) => state.addults 