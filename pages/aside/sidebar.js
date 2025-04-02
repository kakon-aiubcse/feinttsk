import React from "react";
import { usePathname } from "next/navigation";
const Sidebarcomponent = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col h-screen  w-2/12">
        <div className="h-1/6 flex items-center justify-between ">
          <span className="text-xl text-gray-700 p-4">Teach</span>
          <img
            src="/leftarrow.png"
            className="h-8 w-8 bg-black rounded-2xl mr-2"
          />
        </div>
        <div className="h-3/6 text-gray-700 p-4">
          <ul className="space-y-6">
            <li className="font-semibold cursor-pointer">Dashboard</li>

            <li className="font-semibold">
              <details className="group" open={pathname === "/"}>
                <summary className="cursor-pointer flex items-center justify-between">
                  Manage Batch
                  <img src="/dropdown.png" className="h-8 w-8" />
                </summary>
                <ul className="flex flex-col flex-1 my-6 space-y-2 h-auto text-gray-600 items-center">
                  <li
                    className={`w-full py-2 flex items-center justify-center rounded-md  ${
                      pathname === "/" ? "bg-blue-200" : "bg-white"
                    }`}
                  >
                    All Batches
                  </li>
                  <li className="w-full py-3 flex items-center justify-center cursor-pointer  rounded-md ">
                    Resources
                  </li>
                </ul>
              </details>
            </li>

            <li className="font-semibold cursor-pointer">My Earnings</li>
            <li className="font-semibold cursor-pointer">Timetable</li>
            <li className="font-semibold cursor-pointer">Analytics</li>
          </ul>
        </div>

        <div className="h-1/6  p-4 flex flex-col items-start justify-end text-gray-700">
        
          <ul className="space-y-2 ">
            <li className="font-semibold cursor-pointer">Manage Profile</li>
            <li className="font-semibold cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebarcomponent;
