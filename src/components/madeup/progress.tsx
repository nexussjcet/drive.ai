import React from "react";

type TimelineData = {
  value: string;
};

type TimelineProps = {
  searchUserWithName?: TimelineData;
  sentEmailToUser?: TimelineData;
};

const Timeline: React.FC<TimelineProps> = ({
  searchUserWithName,
  sentEmailToUser,
}) => {
  // Define default values for dummy data
  const defaultData = {
    searchUserWithName: {
      value: "sending for user",
    },
    sentEmailToUser: {
      value: "searching email to user",
    },
  };

  // Function to determine the corresponding icon based on the value
  const getIcon = (value: string) => {
    const status = value.toLowerCase().includes("searching")
      ? "searching"
      : "sending";
    switch (status) {
      case "searching":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-1-5h2v-2h-2v2zm1-11.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 1c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z"></path>
          </svg>
        );
      case "sending":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M2 22h20l-9-15-9 15zm10-15l4.5 7.5h-9l2.25-3 1.5 2.5 3-5-6-10h12l-7.5 12-1.5-2.5-3 5z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <ol className="timeline w-85 max-w-700 mx-auto flex flex-col border-l-2 border-gray-200 py-8 pl-8 text-base">
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
          {getIcon(
            searchUserWithName?.value ?? defaultData.searchUserWithName.value,
          )}
        </span>
        <div className="timeline-item-description flex items-center gap-2">
          <p className="flex items-center rounded-xl bg-red-200 p-5">
            {getIcon(
              searchUserWithName?.value ?? defaultData.searchUserWithName.value,
            )}
            {searchUserWithName?.value ?? defaultData.searchUserWithName.value}
          </p>
        </div>
      </li>
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
          {getIcon(sentEmailToUser?.value ?? defaultData.sentEmailToUser.value)}
        </span>
        <div className="timeline-item-description flex items-center gap-2">
          <p className="flex items-center rounded-xl bg-blue-200 p-5">
            {getIcon(
              sentEmailToUser?.value ?? defaultData.sentEmailToUser.value,
            )}
            {sentEmailToUser?.value ?? defaultData.sentEmailToUser.value}
          </p>
        </div>
      </li>
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="animate-spin-slow mr-2 h-5 w-5 fill-current"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 13H4v-2h8V4l8 8-8 8z"></path>
          </svg>
        </span>
        <div className="timeline-item-description flex items-center gap-2">
          <p>Loading...</p>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
