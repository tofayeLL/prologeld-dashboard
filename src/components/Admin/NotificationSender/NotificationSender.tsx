/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
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
import { Filter, RefreshCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetAllRespondersQuery } from "@/redux/api/adminApi";
import { Loading } from "@/components/ui/loading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import eye from "@/assets/eyeIcon.png";

const NotificationSender = () => {
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
        <div className=" rounded-2xl p-6 flex justify-between items-center mb-4">
          <h1 className="lg:text-3xl font-semibold">Notification Sender</h1>
          <div>
            <Filter className="h-10 w-10 text-gray-500" />
          </div>
        </div>

        {/* table */}
        <div className="bg-white p-6 rounded-2xl">
          <div className="w-full space-y-4">
            {/* Header with filters */}
            <div className="flex items-center justify-between l">
              <div className="">
                <h1 className="text-xl font-semibold text-gray-900">
                  Notification History
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
                      NO
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Title
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Message
                    </TableHead>

                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Audience
                    </TableHead>
                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Date
                    </TableHead>

                    <TableHead className=" text-base text-gray-700 font-semibold">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {allRespondersData?.result?.map((item: any, index: any) => (
                    <TableRow
                      key={item?.id}
                      className="border-b last:border-b-0"
                    >
                      <TableCell className="text-gray-700 py-3">
                        {index + 1}
                      </TableCell>
                      <TableCell className="font-medium text-gray-700 py-3 flex justify-start items-center gap-2">
                        Spice Avenue
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        All Drivers
                      </TableCell>
                      <TableCell className="text-gray-700 py-3">
                        10-03-2025
                      </TableCell>

                      <TableCell className="py-3">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer">
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
                      </TableCell>
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

export default NotificationSender;
