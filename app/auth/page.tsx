"use client";

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

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitSendCode = ({ phone }: { phone: string }) => {
    setPhone(phone);
    setStep(2);
  };

  const onSubmitVerifyCode = ({ code }: { code: string }) => {
    console.log(region, phone, code);
  };

  return (
    <main>
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
