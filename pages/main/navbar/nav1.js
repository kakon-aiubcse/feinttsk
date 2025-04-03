import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Nav1 = () => {
  const router = useRouter();
  const { tab } = router.query;
  const tabs = [
    "Students",
    "Announcement",
    "Materials",
    "Homework",
    "Attendance",
    "Discussion",
  ];
  const activeIndex = tabs.includes(tab) ? tabs.indexOf(tab) : 0;

  const progressWidth = ((activeIndex + 1) / tabs.length) * 60;

  return (
    <div className="flex justify-between bg-gray-50 p-4 border-b-[1px] border-black relative left-6">
      <div className="absolute top-[-10px] left-0  w-[1280px] h-[8px] bg-white border rounded-xl border-gray-500">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div className="flex ml-2">
        <ul className="flex space-x-8 items-center text-blue-600 font-thik text-lg  ">
          <li>
            <Link
              href="/?tab=Students"
              onClick={() => {}}
              className={`${
                tab === "Students"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              href="/?tab=Announcement"
              onClick={() => {}}
              className={`${
                tab === "Announcement"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Announcement
            </Link>
          </li>
          <li>
            <Link
              href="/?tab=Materials"
              onClick={() => {}}
              className={`${
                tab === "Materials"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Materials
            </Link>
          </li>
          <li>
            <Link
              href="/?tab=Homework"
              onClick={() => {}}
              className={`${
                tab === "Homework"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Homework
            </Link>
          </li>
          <li>
            <Link
              href="/?tab=Attendance"
              onClick={() => {}}
              className={`${
                tab === "Attendance"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              href="/?tab=Discussion"
              onClick={() => {}}
              className={`${
                tab === "Discussion"
                  ? "font-bold border-b-4 border-blue-500 pb-[14px]"
                  : ""
              }`}
            >
              Discussion
            </Link>
          </li>
          <li>
            <img
              src="/dots.png"
              alt="icon"
              className="h-5 w-5 border border-black rounded-2xl"
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center relative right-20 gap-4">
        <img
          src="/dustbin.png"
          alt="Delete"
          className="h-6 w-6 border cursor-pointer bg-transparent"
        />
        <img
          src="/download.png"
          alt="Download"
          className="h-6 w-6 border cursor-pointer bg-transparent"
        />
      </div>
    </div>
  );
};

export default Nav1;
