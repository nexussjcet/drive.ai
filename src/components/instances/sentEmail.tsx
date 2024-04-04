import { type AFC } from "@/lib/schema";
import { Button } from "../ui/button";

export const sentEmail:AFC<"sentEmail"> = ({data}) => {
    return ( 
        <div>
            <Button variant={"destructive"}>{data.status}</Button>
        </div>
     );
}