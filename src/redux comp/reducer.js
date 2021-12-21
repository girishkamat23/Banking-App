import * as constants from './constants';

const initialstate = {
  amount: 0,
  textValue: '',
  error: null,
  minbal: 1000,
  userDetails: {},
};

const appReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constants.DEPOSIT: {
      let newState = { ...state };
      newState.amount += action.payload;
      return newState;
    }

    case constants.WITHDRAW: {
      let newState = { ...state };
      if (newState.amount - action.payload >= newState.minbal) {
        newState.amount -= action.payload;
      } else {
        newState.error = 'Insufficient Balance!';
      }
      return newState;
    }

    case constants.USERS: {
      let newState = { ...state };
      newState.userDetails = action.payload;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
