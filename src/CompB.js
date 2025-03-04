import { useContext } from "react";
import CompC from "./CompC";
import { cContext } from "./App";

function CompB() {
    const {name} = useContext(cContext);
    return (
        <>
            <h1>CompB</h1>
            Useing context api value in Component B: {name}
            <CompC />
        </>
    )
    }
    export default CompB;