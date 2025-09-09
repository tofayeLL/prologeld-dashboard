// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import userImage from "@/assets/userImage.png";
import Image from "next/image";

interface Violation {
  id: string;
  name: string;
  violationId: string;
  type: string;
  severity: "High" | "Medium" | "Low";
  status: "Warning Issued" | "Resolved" | "Pending";
  date: string;
  avatar: string;
}

const violations: Violation[] = [
  {
    id: "1",
    name: "Jane Cooper",
    violationId: "V-12345",
    type: "Speeding",
    severity: "High",
    status: "Warning Issued",
    date: "10-03-2025",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Eg9kOw2uSQmPidC9OYdgrylb3fi5wd.png",
  },
  {
    id: "2",
    name: "Cody Fisher",
    violationId: "V-12345",
    type: "Speeding",
    severity: "High",
    status: "Warning Issued",
    date: "10-03-2025",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Eg9kOw2uSQmPidC9OYdgrylb3fi5wd.png",
  },
  {
    id: "3",
    name: "Cody Fisher",
    violationId: "V-12345",
    type: "Speeding",
    severity: "High",
    status: "Warning Issued",
    date: "10-03-2025",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Eg9kOw2uSQmPidC9OYdgrylb3fi5wd.png",
  },
];

export function ViolationsSection() {
  return (
    <section className="bg-white p-8 rounded-2xl">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Violations Section
          </h2>
          <Button
            variant="link"
            className="text-muted-foreground hover:text-foreground p-0"
          >
            View All
          </Button>
        </div>

        {/* Violations List */}
        <div className="space-y-4 divide-y-2 ">
          {violations.map((violation) => (
            <div
              key={violation.id}
              className="flex items-start gap-4 py-4 bg-card  "
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-[80px] h-[90px] relative rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={userImage || "/placeholder.svg"}
                  alt={"image"}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Violation Details */}
              <div className="flex-1 min-w-0 ">
                <div className=" ">
                  <div className="space-y-2 ">
                    <div className="flex items-center justify-between ">
                      <h3 className="font-medium text-foreground ">
                        {violation.name}
                      </h3>
                      <div className="flex flex-col justify-between items-end gap-2">
                        <span className="text-sm text-muted-foreground">
                          {violation.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {violation.violationId}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{violation.type}</span>
                      <span>|</span>
                      <span>{violation.severity}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-md ">
                    {violation.status}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-[#EEF9E8] rounded p-2 text-[#397e17] hover:bg-[#e0f8d3] hover:text-[#53C31B] cursor-pointer"
                  >
                    Resolved
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
