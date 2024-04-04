import { type AFC } from "@/lib/schema";

export const summarizeText:AFC<"summarizeText"> = ({data}) => {
    return ( 
        <div>
            <div>{data.text}</div>
        </div>
     );
}