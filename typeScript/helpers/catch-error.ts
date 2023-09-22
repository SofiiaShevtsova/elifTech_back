import { myMessage } from "../commons/constants";

export class MyError extends Error {
  message: string;
  status: number;
  constructor({ message, status }: { message: string; status: number }) {
    super();
    this.message = message;
    this.status = status;
  }
}

export const catchError = (status: number, message?: string): MyError => {
  const errorMessage = message ? message : myMessage[status];
  return new MyError({ message: errorMessage, status });
};
