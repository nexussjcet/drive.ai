import { type AFC } from "@/lib/schema";

const searchFile:AFC<"searchFile"> = ({data}) => {
    return ( 
        <div>
            {data.map( x => <div key={x}>{x}</div>)}
        </div>
     );
}
 
export default searchFile;