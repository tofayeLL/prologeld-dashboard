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

const IncidentReports = () => {
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
          <h1 className="lg:text-3xl text-xl font-semibold text-gray-800">
            Incident Reports
          </h1>
          <div>
            <button className="flex justify-center items-center rounded-lg gap-3 px-4 py-2.5   text-[#FFF] transition-colors ease-in-out duration-500 cursor-pointer mt-4 md:mt-0 border-[1px] bg-[#0D9488]  border-gray-400">
              <span>
                <AiOutlinePlus />
              </span>
              Create
            </button>
          </div>
        </div>

        {/* table */}

        <div className="bg-white p-6 rounded-2xl">
          <div className="w-full space-y-4">
            {/* Header with filters */}
            <div className="flex items-center justify-between l">
              <div className="">
                <h1 className="text-xl font-semibold text-gray-900">
                  Incident Reports
                </h1>
              </div>
              <div className="flex lg:flex-row flex-col  items-center gap-4">
                {/* Search Input */}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search"
                    className=" pr-4 py-2 lg:w-40 bg-white border-gray-200 focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="">
                    <Filter className="h-4 w-4" />
                    Filter
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Category</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="cases">Cases</SelectItem>
                    <SelectItem value="reports">Reports</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 py-2 text-gray-600 border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  Refresh
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg border bg-white overflow-hidden">
              <Table className="">
                <TableHeader className="bg-[#F8FAFC]">
                  <TableRow className="border-b">
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Incident ID
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Pickup Location
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Delivery Location
                    </TableHead>

                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Pickup Date
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Delivery Date
                    </TableHead>

                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Status
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Severity
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Attachments
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {allRespondersData?.result?.map((item: any, index: any) => (
                    <TableRow
                      key={item?.id}
                      className="border-b last:border-b-0"
                    >
                      <TableCell className="font-medium text-gray-700 py-3 flex justify-start items-center gap-2">
                        25625
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        6.37 mi NW of Pike Road AL.
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        Thompson Rd, Indoor, USA
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        10-03-2025
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        10-03-2025
                      </TableCell>
                      <TableCell className="py-3">
                        <Badge
                          variant="secondary"
                          className="bg-[#EEF9E8] text-[#53C31B] px-2 py-1 text-sm"
                        >
                          Completed
                        </Badge>
                      </TableCell>

                      <TableCell className="py-3">Medium</TableCell>

                      <TableCell className="py-3">High</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentReports;
