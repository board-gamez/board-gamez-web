export default function Profile() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
      <div className="flex flex-col">
        <label className="font-bold mb-2">نام و نام خانوادگی</label>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="bg-light-gray border p-3 rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-bold mb-2">شماره موبایل</label>
        <input
          type="text"
          placeholder="شماره موبایل"
          value={"09196062361"}
          className="bg-light-gray border p-3 rounded-lg"
          disabled
        />
      </div>

      <button className="bg-black w-40 text-white rounded-lg p-3 mt-2">
        ویرایش اطلاعات
      </button>
    </form>
  );
}
