'use strict';
const last = (array) => {
  return array[array.length - 1];
};

module.exports = (...errorHandlers) => (error) => {
  const errorHandler = errorHandlers
    .find((handler) => {
      const errorTypes = handler.slice(0, -1);

      if (errorTypes.length === 0) {
        return true;
      }

      return errorTypes.some(type => error instanceof type);
    });

  if (errorHandler === undefined) {
    throw error;
  }

  return last(errorHandler)(error);
};
