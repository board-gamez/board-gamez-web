import { User } from "../types/user";

export interface VerifyCodeInput {
  region: string;
  phone: string;
  code: string;
}

export interface VerifyCodeOutput {
  message: string;
  token: string;
  user: User;
}
