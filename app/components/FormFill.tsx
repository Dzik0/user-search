import Form from "next/form";
import Image from "next/image";
import searchIcon from "@/public/icon-search.svg";
import clsx from "clsx";

type Props = {
  darkMode: boolean;
};
export default function FormFill({ darkMode }: Props) {
  console.log(darkMode);
  return (
    <div
      className={clsx(
        `rounded-xl ${darkMode ? "bg-neutral-800 text-white" : "bg-white text-black shadow-xl shadow-blue-200"}`,
      )}
    >
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
                className={clsx(
                  `h-full w-full text-sm tracking-widest focus:outline-0 ${darkMode && "placeholder-gray-300"}`,
                )}
                placeholder="Search GitHub username..."
                autoComplete="off"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className={clsx(
              `cursor-pointer rounded-xl bg-blue-500 p-3 px-5 font-bold text-white focus:outline-0 ${darkMode ? "focus:shadow-[0_0_0_3px_#1e2a47,0_0_0_5px_#0079ff]" : "focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff]"}`,
            )}
          >
            Search
          </button>
        </div>
      </Form>
    </div>
  );
}
