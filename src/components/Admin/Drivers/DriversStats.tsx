"use client";

import { useGetAllAdminAnalysisQuery } from "@/redux/api/adminApi";
import React from "react";

import Image from "next/image";
import icon from "@/assets/icons/DashboardHome/reported.png";
import { Loading } from "@/components/ui/loading";

const DriversStats = () => {
  const { data: allStatsData, isLoading } = useGetAllAdminAnalysisQuery({});

  console.log("...", allStatsData);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-white">
        <div className="flex items-center justify-center space-x-2">
          <Loading></Loading>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow py-16 flex px-10 justify-between">
        <div className="  ">
          <h1 className="font-medium text-lg text-gray-600">Total Drivers</h1>
          <p className="text-3xl font-medium text-[#0D9488] mt-3">50</p>
        </div>

        {/* card right */}
        <div className=" ">
          <Image
            src={icon}
            alt="Clock icon"
            width={60}
            height={60}
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow py-16 flex px-10 justify-between">
        <div className="  ">
          <h1 className="font-medium text-lg text-gray-600">On -Duty</h1>
          <p className="text-3xl font-medium text-[#0D9488] mt-3">30</p>
        </div>

        {/* card right */}
        <div className="">
          <Image
            src={icon}
            alt="Clock icon"
            width={60}
            height={60}
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow py-16 flex px-10 justify-between">
        <div className="  ">
          <h1 className="font-medium text-lg text-gray-600">Driving</h1>
          <p className="text-3xl font-medium text-[#0D9488] mt-3">20</p>
        </div>

        {/* card right */}
        <div className="">
          <Image
            src={icon}
            alt="Clock icon"
            width={60}
            height={60}
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow py-16 flex px-10 justify-between">
        <div className="  ">
          <h1 className="font-medium text-lg text-gray-600">Average trips per driver</h1>
          <p className="text-3xl font-medium text-[#0D9488] mt-3">16</p>
        </div>

        {/* card right */}
        <div className="  ">
          <Image
            src={icon}
            alt="Clock icon"
            width={60}
            height={60}
            unoptimized
            className="object-cover object-center"
          />
        </div>
      </div>

    </div>
  );
};

export default DriversStats;
