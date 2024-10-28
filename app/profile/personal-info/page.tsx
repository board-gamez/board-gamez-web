"use client";

import { editCurrentUser } from "@/lib/services/auth.service";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

export default function Profile() {
  const { data: session, status } = useSession();
  const { register, handleSubmit } = useForm<Inputs>();
  // const router = useRouter();

  // const refreshData = () => {
  //   router.replace(router.asPath);
  // };

  const onSubmitForm = async ({ name }: { name: string }) => {
    await editCurrentUser(session?.token || "", { name });
    // refreshData();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="flex flex-col">
        <label className="font-bold mb-2">نام و نام خانوادگی</label>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="bg-light-gray border p-3 rounded-lg"
          {...register("name", { required: true, value: session?.user.name })}
        />
      </div>

      <div className="flex flex-col">
        {/* <label className="font-bold mb-2">شماره موبایل</label>
        <input
          type="text"
          placeholder="شماره موبایل"
          value={"09196062361"}
          className="bg-light-gray border p-3 rounded-lg"
          disabled
        /> */}
      </div>

      <button
        className="bg-black w-40 text-white rounded-lg p-3 mt-2"
        type="submit"
      >
        ویرایش اطلاعات
      </button>
    </form>
  );
}
