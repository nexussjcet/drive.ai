import { type AFC } from "@/lib/schema";

export const summarizeText: AFC<"summarizeText"> = ({ data }) => {
  return (
    <div>
      <div className="line-clamp-3">{data.text}</div>
    </div>
  );
};
