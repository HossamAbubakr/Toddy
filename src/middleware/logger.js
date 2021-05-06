// -----> REFACTORING STEPS <----- \\

// [1] create your logger function
const logger = (store) => (next) => (action) => {
  // [2] create a console group with the action type ex: ADD_TODO
  console.group(action.type);
  // [3] log the entire action
  console.log("The action: ", action);
  // [4] send the action to its next destination
  const returnValue = next(action);
  // [5] log the outcome from the next step
  console.log("The new state: ", returnValue);
  console.groupEnd();
  // [6] return the value
  return returnValue;
};

export default logger;
