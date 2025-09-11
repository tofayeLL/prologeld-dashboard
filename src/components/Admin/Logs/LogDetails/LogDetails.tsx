import React from "react";
import LogOverviewCard from "./LogOverviewCard";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Edit, ExternalLink } from "lucide-react";
import Image from "next/image";
import bannerImage from "@/assets/scale.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BiSolidCopy } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const LogDetails = () => {
  return (
    <div>
      {/* log overview card */}
      <div className="my-8">
        <LogOverviewCard></LogOverviewCard>
      </div>

      <div className="bg-white p-4">
        {/* header */}
        <div className="flex items-center justify-between px-6 mb-3 ">
          <p>04-27-2025</p>

          <div className="flex  justify-end item-end gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 border border-gray-200 bg-gray-200"
            >
              <Edit className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 border border-gray-200 bg-gray-200"
            >
              <ChevronsDown className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* scale image */}
        <div className="relative w-full h-72">
          <Image
            src={bannerImage}
            alt="Your banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* table */}
        <div>
          {/* header */}
          <div className="flex justify-start items-center px-4 mb-4">
            <p>Violations:</p>
            <span className="text-red-500 ml-1">Note</span>
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
                    Status
                  </TableHead>

                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Driver Name
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Duration
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Location
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Vehicle Id
                  </TableHead>

                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Notes
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Documents
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Trailer
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Violations
                  </TableHead>
                  <TableHead className=" text-base text-gray-700 font-semibold">
                    Violations
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow
                  className="border-b last:border-b-0"

                  // Add click handler
                >
                  <TableCell >
                    <span><MdCheckBoxOutlineBlank className="w-6 h-6"/></span>
                  </TableCell>
                  <TableCell className="text-gray-700 py-3">
                    <Badge
                      variant="secondary"
                      className="bg-[#EEF9E8] text-[#53C31B] px-2 py-1 text-base"
                    >
                      DR
                    </Badge>
                  </TableCell>

                  <TableCell className="text-gray-700 py-3">Alex Carter</TableCell>
                  <TableCell className="text-gray-700 py-3">7h:45:32s(13h:14m:29s)</TableCell>
                  <TableCell className="text-gray-700 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-900 font-medium">
                        6.37 mi NW of Pike Road AL.
                      </span>
                      

                      <button className="p-1 bg-[#FF9F241A] rounded transition-colors">
                        <ExternalLink className="w-5 h-5 text-[#FAAD14] cursor-pointer" />
                      </button>
                      <button className="p-1 bg-[#0D834A1A] rounded transition-colors">
                        {/* <MapPin className="w-4 h-4 text-green-500" /> */}
                        <BiSolidCopy className="w-5 h-5 text-[#0D9488] cursor-pointer" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700 py-3">
                 2588
                  </TableCell>
                  <TableCell className="py-3">
                   lore
                  </TableCell>
                  <TableCell className="py-3">
                    Cars
                  </TableCell>
                  <TableCell className="py-3">
                  None
                  </TableCell>
                  <TableCell className="py-3">
                   No Pit
                  </TableCell>
                  <TableCell className="py-3">
                   No Pit
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogDetails;
