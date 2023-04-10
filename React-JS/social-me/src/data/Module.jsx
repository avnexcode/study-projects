export const wait = (time) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
};
