import {
  FolderSync,
  NotebookPen,
  ScanText,
  Search,
  Send,
  Shrink,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

type TimelineData = {
  value: string;
  key: string;
  iteration: number;
  permission: boolean;
  error?: string;
};

type TimelineProps = {
  timelineData: TimelineData[];
};

const Timeline: React.FC<TimelineProps> = ({ timelineData }) => {
  // Function to determine the corresponding icon based on the value
  const getIcon = (value: string) => {
    const status = value?.toLowerCase().includes("searching")
      ? "searching"
      : value.toLowerCase().includes("sending")
        ? "sending"
        : value.toLowerCase().includes("reading")
          ? "reading"
          : value.toLowerCase().includes("writing")
            ? "writing"
            : value.toLowerCase().includes("summarizing")
              ? "summarizing"
              : value.toLowerCase().includes("converting")
                ? "converting"
                : "searching";
    switch (status) {
      case "searching":
        return <Search />;
      case "sending":
        return <Send />;
      case "reading":
        return <ScanText />;
      case "writing":
        return <NotebookPen />;
      case "summarizing":
        return <Shrink />;
      case "converting":
        return <FolderSync />;
      default:
        return null;
    }
  };

  // Function to generate random background color
  const getRandomColor = () => {
    const colors = [
      "bg-red-200",
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Card className="no-scrollbar flex max-h-[500px] w-[380px]  justify-center overflow-scroll px-10 py-5">
      <CardContent>
        <ol className="timeline max-w-700 mx-auto flex flex-col border-l-2 border-gray-200 py-8 pl-8 text-base ">
          {timelineData.map((data, index) => (
            <li key={index} className="timeline-item mt-8 flex gap-8">
              <span className="timeline-item-icon -ml-14 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
                {data.permission ? getIcon(data.value) : getIcon(data.error)}
              </span>
              <div
                className={`timeline-item-description flex flex-col items-center  rounded-xl ${
                  data.permission
                    ? "bg-green-200"
                    : !data.permission
                      ? "bg-red-400"
                      : getRandomColor()
                } p-2`}
              >
                <p className="flex flex-row items-center gap-5 rounded-xl">
                  {data.permission ? getIcon(data.value) : getIcon(data.error)}
                  {data.permission ? data.value : data.error}
                </p>
                {!data.permission && (
                  <Button className="self-end bg-red-400 text-white">
                    click to allow
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Timeline;
