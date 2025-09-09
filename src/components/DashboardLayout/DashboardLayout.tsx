"use client";

import React, { useState } from "react";
import DashboardStat from "./DashboardStat";

import RecentActivityTable from "./RecentActivityTable";
import { CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import image from "@/assets/locationMapImage.png";

import { ViolationsSection } from "./ViolationsSection";
import { HosCompliance } from "./HosCompliance";

/* import { BookList } from "./BookList"; */

const DashboardLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("Monthly");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    // Add filtering logic here based on your needs
  };
  return (
    <section className="space-y-8">
      <DashboardStat />

      <div>
        <div className="  grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="col-span-2">
            <div className="p-6 h-full bg-white rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 mb-6">
                <CardTitle className="text-xl md:text-2xl font-semibold">
                  Map
                </CardTitle>
                <div className="hidden md:flex items-center gap-6">
                  {/*   <div className="flex justify-center items-center gap-2">
            <p className="bg-[#54BB52] h-4 w-4 rounded"></p>
            <h1>Payment</h1>
          </div> */}
                  <Select
                    value={selectedCategory}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Monthly" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="Yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              {/* Map Container */}
              <div className="relative w-full h-[380px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image} // Replace with your map image path
                  alt="World Map"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <HosCompliance></HosCompliance>
          </div>
        </div>
      </div>

      <div>
        <div className="  grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="lg:col-span-2 ">
            <RecentActivityTable></RecentActivityTable>
          </div>
          <div className="col-span-1">
            <ViolationsSection></ViolationsSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
