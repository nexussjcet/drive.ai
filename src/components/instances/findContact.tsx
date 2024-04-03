import { type AFC } from "@/lib/schema";

const findContact:AFC<"findContact"> = ({data}) => {
    return ( 
        <div>
            {data.map( x => <div key={x.email}>{x.name} - {x.email}</div>)}
        </div>
     );
}
 
export default findContact;