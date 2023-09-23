export interface IUserAdd {
  fullName?: string;
  email: string;
  password: string;
}

export type TUserResponce = {
    email: string;
    fullName: string;
    _id: string;
  }

export interface IAuthResponce{
  token: string;
  user: TUserResponce
}

export interface IUserTravelApp extends IUserAdd {
  _id: string;
  token?: string;
}

export type JwtPayload = {
  id: string;
}

