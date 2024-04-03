import { type AFC } from "@/lib/schema";

const convertFileFromTo:AFC<"convertFileFromTo"> = ({data}) => {
    return ( 
        <div>
            <div>{data}</div>
        </div>
     );
}
 
export default convertFileFromTo;