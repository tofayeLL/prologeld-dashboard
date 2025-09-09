"use client";
import React from "react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
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
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import userImage from "@/assets/User.png";

interface DriverPerformanceData {
  id: string;
  profile: {
    name: string;
    image?: string;
  };
  tripsCompleted: number;
  safetyScore: {
    current: number;
    max: number;
  };
  harshBraking: {
    current: number;
    max: number;
  };
  speeding: number;
  totalScore: number;
}

const mockData: DriverPerformanceData[] = [
  {
    id: "1",
    profile: {
      name: "John Doe",
    },
    tripsCompleted: 35,
    safetyScore: {
      current: 90,
      max: 100,
    },
    harshBraking: {
      current: 45,
      max: 100,
    },
    speeding: 2,
    totalScore: 85,
  },
  {
    id: "2",
    profile: {
      name: "Sarah Johnson",
    },
    tripsCompleted: 42,
    safetyScore: {
      current: 75,
      max: 100,
    },
    harshBraking: {
      current: 30,
      max: 100,
    },
    speeding: 5,
    totalScore: 70,
  },
  {
    id: "3",
    profile: {
      name: "Mike Wilson",
    },
    tripsCompleted: 28,
    safetyScore: {
      current: 95,
      max: 100,
    },
    harshBraking: {
      current: 60,
      max: 100,
    },
    speeding: 1,
    totalScore: 92,
  },
];

// Progress Bar Component
interface ProgressBarProps {
  current: number;
  max: number;
  showText?: boolean;
  size?: "sm" | "md";
  colorScheme?: "green" | "yellow" | "red" | "blue";
}

export const  ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  max,
  showText = true,
  size = "md",

}) => {
  const percentage = Math.min((current / max) * 100, 100);
  
  // Color schemes for different types of scores
 

  const heightClass = size === "sm" ? "h-2" : "h-3";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex-1 bg-gray-200 rounded-full ${heightClass} overflow-hidden`}>
        <div
          className={`${heightClass} } rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showText && (
        <span className="text-sm font-medium text-gray-700 min-w-[50px]">
          {current}/{max}
        </span>
      )}
    </div>
  );
};

const RecentActivityTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("august-2024");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    // Add filtering logic here based on your needs
  };

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
    // Add filtering logic here based on your needs
  };

  return (
    <section>
      <div className="bg-white p-6 rounded-2xl">
        <div className="w-full space-y-4">
          {/* Header with filters */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Driver Performance
            </h2>
            <div className="flex items-center gap-4">
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="All Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Category</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="cases">Cases</SelectItem>
                  <SelectItem value="reports">Reports</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMonth} onValueChange={handleMonthChange}>
                <SelectTrigger className="">
                  <SelectValue placeholder="August 2024" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="august-2024">August 2024</SelectItem>
                  <SelectItem value="july-2024">July 2024</SelectItem>
                  <SelectItem value="june-2024">June 2024</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-transparent text-black hover:bg-transparent border border-gray">
                See More
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border bg-white overflow-hidden">
            <Table className="">
              <TableHeader className="bg-[#F8FAFC]">
                <TableRow className="border-b">
                  <TableHead className="text-base font-semibold">
                    Profile
                  </TableHead>
                  <TableHead className="text-base font-semibold">
                    Trips Completed
                  </TableHead>
                  <TableHead className="text-base font-semibold">
                    Safety Score
                  </TableHead>
                  <TableHead className="text-base font-semibold">
                    Harsh Braking
                  </TableHead>
                  <TableHead className="text-base font-semibold">
                    Speeding
                  </TableHead>
                  <TableHead className="text-base font-semibold">
                    Total Score
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((item) => (
                  <TableRow key={item.id} className="border-b last:border-b-0">
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
                    <TableCell className="text-gray-700 py-3">35</TableCell>
                    <TableCell className="text-gray-700 py-3">
                      <div>
                        <p>90/100</p>
                        <div className="mt-2 flex-1 bg-gray-200 lg:w-[60%] rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 bg-green-500  rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: "90%" }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3">
                     2
                    </TableCell>
                    <TableCell className="py-3">2</TableCell>
                       <TableCell className="py-3">
                      <div>
                        <p>45/100</p>
                        <div className="mt-2 flex-1 bg-gray-200 lg:w-[60%] rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivityTable;