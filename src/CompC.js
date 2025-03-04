import { cContext } from "./App";
import { useContext } from "react";

function CompC() {
    const { name } = useContext(cContext);
    return (
        <>
            <h1>CompC</h1>
            Accessing the value from Context API: {name}
        </>
    )
}
export default CompC;