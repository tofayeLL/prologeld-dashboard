import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Edit, RotateCcw } from "lucide-react";
import { BiSolidCopy } from "react-icons/bi";

// Circular progress component
function CircularProgress({
  value,
  max,
  color,
  label,
  time,
}: {
  value: number;
  max: number;
  color: string;
  label: string;
  time: string;
}) {
  const percentage = (value / max) * 100;
  const strokeDasharray = 2 * Math.PI * 40; // radius = 40
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * percentage) / 100;

  const getStrokeColor = (colorClass: string) => {
    switch (colorClass) {
      case "text-orange-400":
        return "#fb923c";
      case "text-green-400":
        return "#4ade80";
      case "text-blue-400":
        return "#60a5fa";
      case "text-cyan-400":
        return "#22d3ee";
      default:
        return "#e5e7eb";
    }
  };

  const getTextColor = (colorClass: string) => {
    switch (colorClass) {
      case "text-orange-400":
        return "text-orange-600";
      case "text-green-400":
        return "text-green-600";
      case "text-blue-400":
        return "text-blue-600";
      case "text-cyan-400":
        return "text-cyan-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
          {/* Background circle */}
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke={getStrokeColor(color)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-lg font-bold ${getTextColor(color)}`}>
            {time}
          </span>
          <span className="text-xs text-gray-500 mt-0.5">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function LogOverviewCard() {
  return (
    <div className=" ">

      <Card className="p-8 bg-white shadow-sm">
        
        <div className="flex items-start justify-between">
          {/* Left section - Driver info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">John Duo</h1>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Driver ID: 5664</span>
                <BiSolidCopy className="w-5 h-5 text-gray-500 cursor-pointer rounded-lg" />
              </div>
              <div className="flex items-center gap-2">
                <span>Vehicle ID: 5664</span>
                 <BiSolidCopy className="w-5 h-5 text-gray-500 cursor-pointer rounded-lg" />
              </div>
              <div className="flex items-center gap-2">
                <span>Phone Number:</span>
                <button className="text-orange-500 hover:text-orange-600 font-medium">
                  Show Phone
                </button>
                 <BiSolidCopy className="w-5 h-5 text-gray-500 cursor-pointer rounded-lg" />
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <CircularProgress
              value={20}
              max={100}
              color="text-orange-400"
              label="Break"
              time="00:00"
            />
            <CircularProgress
              value={70}
              max={100}
              color="text-green-400"
              label="Sleep"
              time="00:00"
            />
            <CircularProgress
              value={50}
              max={100}
              color="text-blue-400"
              label="On Duty"
              time="00:00"
            />
            <CircularProgress
              value={30}
              max={100}
              color="text-cyan-400"
              label="Driving"
              time="02:27"
            />
          </div>

          {/* Right section - Status and stats */}
          <div className="space-y-6 text-right">
            {/* Status badges */}
            <div className="flex gap-2 justify-end">
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-600 border-blue-200 px-3 py-1"
              >
                Driving
              </Badge>
              <Badge
                variant="outline"
                className="bg-teal-50 text-teal-600 border-teal-200 px-3 py-1"
              >
                ELD ON
              </Badge>
              <Badge
                variant="outline"
                className="bg-gray-50 text-gray-600 border-gray-200 px-3 py-1"
              >
                iPhone 16
              </Badge>
            </div>

            {/* Stats */}
            <div className="space-y-3 text-sm">
              <div className="text-gray-600">
                <span className="text-gray-500">Worked Hours:</span>{" "}
                <span className="font-medium text-gray-900">2:27</span>
              </div>
              <div className="text-gray-600">
                <span className="text-gray-500">Total miles:</span>{" "}
                <span className="font-medium text-gray-900">10 mi</span>
              </div>
              <div className="text-gray-600">
                <span className="text-gray-500">Violations:</span>{" "}
                <span className="font-medium text-purple-600">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Date range and controls */}
        <div className="flex items-center justify-between mt-0 pt-6 ">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
             
              <span className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md p-2">
                04-20-2025 ~ 04-26-2025
              </span>
              
            </div>
            <div className="flex items-center gap-4">
            <Button  size="sm" className="h-8 w-8 p-0 bg-[#F8F9FA] text-gray-900 hover:bg-[#e3e9f0]">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button  size="sm" className="h-8 w-8 p-0 bg-[#F8F9FA] text-gray-900 hover:bg-[#e3e9f0]">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
           
            <Button className="text-sm bg-[#F8F9FA] text-gray-700 hover:bg-[#e3e9f0] border border-gray-300">
                Current week
            </Button>
          </div>
          

          <div className="flex gap-2">
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
              className="h-8 w-8  border border-orange-200 text-orange-500 bg-orange-50"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
          
        </div>

      </Card>

    </div>
  );
}
