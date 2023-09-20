export interface IUserAdd {
  fullName?: string;
  email: string;
  password: string;
}

export interface IUserTravelApp extends IUserAdd {
  _id: string;
  token: string;
}

export type JwtPayload = {
  id: string;
}

