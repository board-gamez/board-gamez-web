import { User } from "../types/user";

export interface EditCurrentUserInput {
  name: string;
}

export interface EditCurrentUserOutput {
  message: string;
  user: User;
}
