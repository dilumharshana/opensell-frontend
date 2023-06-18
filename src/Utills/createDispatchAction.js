//function related to create actions to use as useReducer action in dispatch functions
export const createDispatchAction = (type, payload) => {
  return { type, payload };
};
