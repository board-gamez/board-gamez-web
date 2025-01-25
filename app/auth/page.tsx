"use client";

import { sendCode } from "@/lib/services/auth.service";
import Redirect from "@/lib/utils/Redirect";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  phone: string;
  code: string;
};

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("IR");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitSendCode = ({ phone }: { phone: string }) => {
    sendCode({
      region,
      phone,
    })
      .then((resp) => {})
      .catch((error) => {
        console.log(error.message);
      });

    setPhone(phone);
    setStep(2);
  };

  const onSubmitVerifyCode = async ({ code }: { code: string }) => {
    const resp = await signIn("credentials", {
      redirect: false,
      region,
      phone,
      code,
    });

    if (resp?.error) {
      setError(resp?.error);
      return;
    }

    Redirect("/");
  };

  return (
    <main>
      {error && (
        <div className="bg-red-100 text-red-400 text-center">{error}</div>
      )}

      {step === 1 && (
        <form
          onSubmit={handleSubmit(onSubmitSendCode)}
          className="bg-white w-[500px] mx-auto rounded-lg px-5 flex flex-col py-16 my-20"
        >
          <Image
            src={"/logo.svg"}
            width={130}
            height={130}
            alt=""
            className="mt-5 mb-16 mx-auto"
          />

          <label className="mb-2">شماره موبایل خود را وارد کنید</label>

          <input
            type="text"
            className="bg-light-gray rounded-lg p-4 outline-none mb-7"
            placeholder="شماره موبایل خود را وارد کنید"
            maxLength={11}
            {...register("phone", { required: true })}
          />

          <button
            className="bg-black text-white rounded-lg p-4 outline-none"
            type="submit"
          >
            ارسال کد
          </button>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={handleSubmit(onSubmitVerifyCode)}
          className="bg-white w-[500px] mx-auto rounded-lg px-5 flex flex-col py-16 my-20"
        >
          <Image
            src={"/logo.svg"}
            width={130}
            height={130}
            alt=""
            className="mt-5 mb-16 mx-auto"
          />

          <label className="mb-2">کد تایید برای شماره {phone} پیامک شد</label>

          <input
            type="text"
            className="bg-light-gray rounded-lg p-4 outline-none mb-7"
            placeholder="کد تایید را وارد کنید"
            maxLength={5}
            {...register("code", { required: true })}
          />

          <button className="bg-black text-white rounded-lg p-4 outline-none">
            ورود
          </button>
        </form>
      )}
    </main>
  );
}
