
import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

const BatchUpdate = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0); 
    console.log('Re Rendering');
    const handleUpdateValue = (event) => {
        event.preventDefault();
        setTimeout(() => {
            setValue(100);
            setValue2(200);
        })
        // unstable_batchedUpdates(() => {
        //     setValue(100);
        //     setValue2(200);
        // })
        
    }   
    return (
        <>
            <form>
                <p>
                    Initial Value : {value}
                    Initial Value2 : {value2}
                </p>
                <button onClick={handleUpdateValue}>UpdateValue</button>  
            </form>
        </>
    )
}

export default BatchUpdate;