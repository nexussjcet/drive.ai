import { type AFC } from "@/lib/schema";

const readFile:AFC<"readFile"> = ({data}) => {
    return ( 
        <div>
            <div>{data}</div>
        </div>
     );
}
 
export default readFile;