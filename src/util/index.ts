import { Request } from "express";
import { type } from "os";

export interface AuthRequest extends Request {
  user: {
    id: string
  }
}

export enum Status {
  SUCCESS = "success",
}

export enum Flag {
  AUTH = 'auth',
  EMAIL_VERIFICATION = 'email-verification'
}

export type signUpRequest = {
  fullname: string;
  email: string;
  password: string;
};
