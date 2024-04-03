import { type AFC } from "@/lib/schema";

const summarizeText:AFC<"summarizeText"> = ({data}) => {
    return ( 
        <div>
            <div>{data}</div>
        </div>
     );
}
 
export default summarizeText;