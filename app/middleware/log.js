const logMiddleware = store => next => action => {
  next(action);

  console.log(`Action: ${ action.type }`);
};

export default logMiddleware;