export const clickSquare = value => {
  return {
    type: 'HANDLE_CLICK',
    payload: value
  }
};

export const clickHistory = value => {
  return {
    type: 'CLICK_HISTORY',
    payload: value
  }
};

export const clickRestart = () => {
  return {
    type: 'CLICK_RESTART'
  }
};
