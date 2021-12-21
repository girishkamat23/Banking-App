import * as constants from './constants';

export const depositAmount = (amount) => ({
  type: constants.DEPOSIT,
  payload: amount,
});

export const withdrawAmount = (amount) => ({
  type: constants.WITHDRAW,
  payload: amount,
});

export const doLogin = (email, password) => ({
  type: constants.LOGIN,
  payload: {
    email,
    password,
  },
});

export const inputValue = (amount) => ({
  type: constants.TEXT_VALUE,
  payload: amount,
});

export const userDetails = (data) => ({
  type: constants.USERS,
  payload: data,
});
