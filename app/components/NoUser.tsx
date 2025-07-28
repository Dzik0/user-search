import clsx from "clsx";

type Props = {
  darkMode: boolean;
};

export default function NoUser({ darkMode }: Props) {
  return (
    <div
      className={clsx(
        `flex justify-center rounded-xl p-10 ${darkMode ? "bg-neutral-800 text-white" : "bg-white shadow-2xl shadow-blue-200"}`,
      )}
    >
      <h2 className="text-2xl">Let&apos;s explore GitHub users! 😎</h2>
    </div>
  );
}
