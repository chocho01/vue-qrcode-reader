export const indempotent = action => {
  let called = false;
  let result;

  return (...args) => {
    if (called) {
      return result;
    } else {
      result = action(...args);
      called = true;

      return result;
    }
  };
};
