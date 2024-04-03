import { type AFC } from "@/lib/schema";

const sentEmail:AFC<"sentEmail"> = ({data}) => {
    return ( 
        <div>
            <div>{data}</div>
        </div>
     );
}
 
export default sentEmail;