export const mongooseHandleError = (error: any, data: any, next: any): void => {
  const status =
    error.name === "MongoServerError" && error.code === 11000 ? 409 : 400;
  error.status = status;
  next();
};