import { type AFC } from "@/lib/schema";

const writeFile:AFC<"writeFile"> = ({data}) => {
    return ( 
        <div>
            <div>{data}</div>
        </div>
     );
}
 
export default writeFile;