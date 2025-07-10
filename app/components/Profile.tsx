import Image from "next/image";
import userImg from "@/public/image.png";
import locationLogo from "@/public/icon-location.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import websiteLogo from "@/public/icon-website.svg";
import companyLogo from "@/public/icon-company.svg";

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-5 shadow-2xl shadow-blue-200">
      <div className="flex gap-6">
        <div className="w-20">
          <Image src={userImg} style={{ objectFit: "cover" }} alt="User Icon" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold">The Octacat</h2>
          <h3 className="text-2xl text-blue-300">@octacat</h3>
          <h4 className="text-neutral-500">Joined 25 Jan 2011</h4>
        </div>
      </div>
      <p className="text-neutral-500">This Profile has no bio</p>

      <div className="grid gap-3 rounded-xl bg-neutral-100 p-5 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <p className="text-neutral-500">Repos</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-500">Followers</p>
          <p className="text-2xl font-bold">3939</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-500">Following</p>
          <p className="text-2xl font-bold">9</p>
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
          <p className="text-neutral-500">San Francisco</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={twitterLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p className="text-neutral-500">Not Avaible</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={websiteLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p className="text-neutral-500">https://github.blog</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-5">
            <Image
              src={companyLogo}
              style={{ width: "100%" }}
              alt="location logo"
            />
          </div>
          <p className="text-neutral-500">@github</p>
        </div>
      </div>
    </div>
  );
}
