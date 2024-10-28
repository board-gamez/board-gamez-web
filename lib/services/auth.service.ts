import axios from "axios";
import { SendCodeInput, SendCodeOutput } from "../dto/send-code.dto";
import { VerifyCodeInput, VerifyCodeOutput } from "../dto/verify-code.dto";
import {
  EditCurrentUserInput,
  EditCurrentUserOutput,
} from "../dto/edit-current-user.dto";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function sendCode(input: SendCodeInput): Promise<SendCodeOutput> {
  const url = `${baseUrl}/auth/send-code`;

  const response = await axios.post(url, {
    region: input.region,
    phone: input.phone,
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}

export async function verifyCode(
  input: VerifyCodeInput
): Promise<VerifyCodeOutput> {
  const url = `${baseUrl}/auth/verify-code`;

  const response = await axios.post(url, {
    region: input.region,
    phone: input.phone,
    code: input.code,
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error(response.statusText);
  }

  return response.data;
}

export async function editCurrentUser(
  token: string,
  input: EditCurrentUserInput
): Promise<EditCurrentUserOutput> {
  const url = `${baseUrl}/auth/current-user`;

  const response = await axios.put(
    url,
    {
      name: input.name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status !== 200 && response.status !== 201) {
    throw new Error(response.statusText);
  }

  return response.data;
}
