"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  phone: string;
};

export default function AuthPage() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("phone", { required: true })}
        />

        <button className="bg-black text-white rounded-lg p-4 outline-none">
          ارسال کد
        </button>
      </form>
    </main>
  );
}
