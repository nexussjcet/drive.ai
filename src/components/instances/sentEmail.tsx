import { type AFC } from "@/lib/schema";
import { Button } from "../ui/button";

export const sentEmail: AFC<"sentEmail"> = ({ data }) => {
  return (
    <div>
      <Button className="bg-green-300 text-white">{data.status}</Button>
    </div>
  );
};
