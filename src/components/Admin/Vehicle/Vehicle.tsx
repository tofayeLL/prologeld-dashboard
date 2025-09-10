/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
// import { useState } from "react";
// import eye from "@/assets/eyeIcon.png";
// import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

// import Image from "next/image";
import { ExternalLink, Filter, RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import { useGetAllRespondersQuery } from "@/redux/api/adminApi";
import { Loading } from "@/components/ui/loading";
// import userImage from "@/assets/User.png";
import { Badge } from "@/components/ui/badge";
import { BiSolidCopy } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import eye from "@/assets/eyeIcon.png";

import edit from "@/assets/edit.png";

import Image from "next/image";
import userImage from "@/assets/User.png";
import VehicleStats from "./VehicleStats";

const Vehicle = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data: allRespondersData, isLoading } = useGetAllRespondersQuery({});
  // console.log("......", allRespondersData);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    // Add filtering logic here based on your needs
  };

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
    <section>
      <div>
        {/* header title */}
        <div className=" rounded-2xl p-6 flex justify-between items-center mb-6">
          <h1 className="lg:text-3xl text-xl font-medium">
            Vehicle Management
          </h1>
          <div>
            <button className="flex justify-center items-center rounded-lg gap-3 px-4 py-2.5   text-[#FFF] transition-colors ease-in-out duration-500 cursor-pointer mt-4 md:mt-0 border-[1px] bg-[#0D9488]  border-gray-400">
              <span>
                <AiOutlinePlus />
              </span>
              Add Vehicle
            </button>
          </div>
        </div>

        {/* all stats */}
        <div className="my-8">
          <VehicleStats></VehicleStats>
        </div>

        {/* table */}

        <div className="rounded-lg border bg-white overflow-hidden">
          <Table className="">
            <TableHeader className="bg-[#F8FAFC]">
              <TableRow className="border-b">
                <TableHead className=" text-base text-gray-700 font-semibold">
                  NO
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Vehicle Model
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Vehicle ID
                </TableHead>

                <TableHead className=" text-base text-gray-700 font-semibold">
                  Driver Name
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Fuel consumption
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Last Maintenance
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Maintenance Date
                </TableHead>

                <TableHead className=" text-base text-gray-700 font-semibold">
                  Next Maintenance
                </TableHead>
                <TableHead className=" text-base text-gray-700 font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allRespondersData?.result?.map((item: any, index: any) => (
                <TableRow key={item?.id} className="border-b last:border-b-0">
                  <TableCell className="font-medium text-gray-700 py-3 flex justify-start items-center gap-2">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-gray-700 py-3">
                    Toyota965
                  </TableCell>
                  <TableCell className="text-gray-700 py-3">25625</TableCell>
                  <TableCell className="font-medium text-gray-700 py-3 flex justify-start items-center gap-2">
                    <div className="relative">
                      <Image
                        src={userImage}
                        alt="eye"
                        height={50}
                        width={50}
                        className="object-cover w-10 h-10 object-center rounded-md"
                        priority
                      />
                    </div>{" "}
                    {"John Doe"}
                  </TableCell>
                  <TableCell className="text-gray-700 py-3">10L</TableCell>

                  <TableCell className="text-gray-700 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </TableCell>

                  <TableCell className="text-gray-700 py-3 text-center">
                    10-03-2025 <br />
                    <span>$500</span>
                    {/* <Badge
                                variant="secondary"
                                className={
                                  item?.status?.toUpperCase() === "ACTIVE"
                                    ? "bg-[#10B98114] text-[#10B981] px-5 py-1 text-base"
                                    : item?.status?.toUpperCase() === "SUSPENDED"
                                    ? "bg-[#E353141A] text-[#E35314] px-5 py-1 text-base"
                                    : "bg-gray-100 text-gray-700 px-5 py-1 text-base"
                                }
                              >
                                {item?.status}
                              </Badge> */}
                  </TableCell>
                  <TableCell className="py-3">10-03-2025</TableCell>
                  <TableCell className="py-3">
                    <div className="flex ">
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg">
                        <div className="relative">
                          <Image
                            src={eye}
                            alt="eye"
                            height={50}
                            width={50}
                            className="object-cover w-6 h-6 object-center"
                            priority
                          />
                        </div>
                      </button>

                      {/* edit button */}
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg">
                        <div className="relative">
                          <Image
                            src={edit}
                            alt="edit"
                            height={50}
                            width={50}
                            className="object-cover w-6 h-6 object-center"
                            priority
                          />
                        </div>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
