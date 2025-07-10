import Image from "next/image";
import userImg from "@/public/image.png";
import locationLogo from "@/public/icon-location.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import websiteLogo from "@/public/icon-website.svg";
import companyLogo from "@/public/icon-company.svg";
import clsx from "clsx";

type Props = {
  darkMode: boolean;
};

export default function Profile({ darkMode }: Props) {
  return (
    <div
      className={clsx(
        `flex flex-col gap-6 rounded-xl p-5 ${darkMode ? "bg-neutral-800" : "bg-white shadow-2xl shadow-blue-200"}`,
      )}
    >
      <div className="flex gap-6">
        <div className="w-20">
          <Image src={userImg} style={{ objectFit: "cover" }} alt="User Icon" />
        </div>
        <div className="flex w-full flex-col gap-1 md:flex-row md:justify-between">
          <div className="flex flex-col gap-1">
            <h2
              className={clsx(`text-3xl font-bold ${darkMode && "text-white"}`)}
            >
              The Octacat
            </h2>
            <h3 className="text-2xl text-blue-300">@octacat</h3>
          </div>
          <h4
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            Joined 25 Jan 2011
          </h4>
        </div>
      </div>
      <p
        className={clsx(
          `${darkMode ? "text-neutral-200" : "text-neutral-500"}`,
        )}
      >
        This Profile has no bio
      </p>

      <div
        className={clsx(
          `grid gap-3 rounded-xl p-5 md:grid-cols-3 ${darkMode ? "bg-neutral-900" : "bg-neutral-100"}`,
        )}
      >
        <div className="flex flex-col gap-2">
          <p
            className={clsx(
              `${darkMode ? "text-neutral-200" : "text-neutral-500"}`,
            )}
          >
            Repos
          </p>
          <p className={clsx(`text-2xl font-bold ${darkMode && "text-white"}`)}>
            8
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className={clsx(
              `${darkMode ? "text-neutral-200" : "text-neutral-500"}`,
            )}
          >
            Followers
          </p>
          <p className={clsx(`text-2xl font-bold ${darkMode && "text-white"}`)}>
            1234
          </p>
        </div>{" "}
        <div className="flex flex-col gap-2">
          <p
            className={clsx(
              `${darkMode ? "text-neutral-200" : "text-neutral-500"}`,
            )}
          >
            Following
          </p>
          <p className={clsx(`text-2xl font-bold ${darkMode && "text-white"}`)}>
            12
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={locationLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            San Francisco
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={twitterLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            Not Avaible
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={websiteLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            https://github.blog
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={companyLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            @github
          </p>
        </div>
      </div>
    </div>
  );
}
