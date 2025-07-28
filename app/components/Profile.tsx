"use client";

import Image from "next/image";
import userImg from "@/public/image.png";
import locationLogo from "@/public/icon-location.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import websiteLogo from "@/public/icon-website.svg";
import companyLogo from "@/public/icon-company.svg";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  darkMode: boolean;
};

type User = {
  login: string;
  name: string;
  avatar_url: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
};

export default function Profile({ darkMode }: Props) {
  const params: string | null = useSearchParams().get("user");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(false);
  const createDate = !error && user?.created_at.split("T")[0];

  async function getData() {
    const res = await fetch(`https://api.github.com/users/${params}`);
    if (res.status === 404) {
      console.log("Cant find");
      setError(true);
      return;
    }

    if (!res) {
      console.log("Error");
      setError(true);
      return;
    }

    const data = await res.json();
    setError(false);
    setUser(data);
  }

  useEffect(() => {
    if (!params) {
      setUser(null);
      return;
    }

    getData();
  }, [params]);

  if (error) {
    return <h2 className="text-center text-xl text-red-400">NO USER FOUND</h2>;
  }

  return (
    <div
      className={clsx(
        `flex flex-col gap-6 rounded-xl p-5 ${darkMode ? "bg-neutral-800" : "bg-white shadow-2xl shadow-blue-200"}`,
      )}
    >
      <div className="flex gap-6">
        <div className="w-23 overflow-hidden rounded-[50%]">
          <Image
            src={user?.avatar_url || userImg}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            alt="User Icon"
          />
        </div>
        <div className="flex w-full flex-col gap-1 md:flex-row md:justify-between">
          <div className="flex flex-col gap-1">
            <h2
              className={clsx(`text-3xl font-bold ${darkMode && "text-white"}`)}
            >
              {user?.name}
            </h2>
            <h3 className="text-2xl text-blue-300 lowercase">@{user?.login}</h3>
          </div>
          <h4
            className={clsx(
              `${darkMode ? "text-neutral-100" : "text-neutral-500"}`,
            )}
          >
            Joined {createDate}
          </h4>
        </div>
      </div>
      <p
        className={clsx(
          `${darkMode ? "text-neutral-200" : "text-neutral-500"}`,
        )}
      >
        {user?.bio ? user?.bio : "This user has no bio."}
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
            {user?.public_repos}
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
            {user?.followers}
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
            {user?.following}
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
            {user?.location}
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
            {user?.twitter_username ? user?.twitter_username : "Not avaible"}
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
            {user?.blog ? user?.blog : "Not avaible"}
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
            {user?.company ? user?.company : "Not avaible"}
          </p>
        </div>
      </div>
    </div>
  );
}
