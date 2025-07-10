import Form from "next/form";
import Image from "next/image";
import searchIcon from "@/public/icon-search.svg";

export default function FormFill() {
  return (
    <div className="rounded-xl bg-white shadow-xl shadow-blue-200">
      <Form action={"/"}>
        <div className="flex gap-1 p-3">
          <div className="mt-3 mb-3 flex w-full gap-2">
            <div className="flex w-8 items-center justify-center">
              <Image
                src={searchIcon}
                style={{ width: "100%" }}
                alt="Search Icon"
              />
            </div>
            <label className="w-full">
              <input
                type="text"
                name="user"
                className="h-full w-full text-sm tracking-widest focus:outline-0"
                placeholder="Search GitHub username..."
                autoComplete="off"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-blue-500 p-3 px-5 font-bold text-white focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff]"
          >
            Search
          </button>
        </div>
      </Form>
    </div>
  );
}
