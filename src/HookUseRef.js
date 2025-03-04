import { useEffect, useRef, useState } from "react";


function HookUse () {
    const [value, setValue] = useState();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        setValue(inputRef.current.value);
    },[]);

    const handleOnchange =()=> {
        inputRef.current.style.color = "red";
        inputRef.current.style.width = "500px";
       // console.log(inputRef.current.value);
        //setValue(event.target.value);   
    }
    return (
        <div>
            <p>Use of useRef</p>
            <h3>{value}</h3>
            <input placeholder="Enter text" type="text" ref={inputRef}/>
            <button onClick={handleOnchange}>Submit</button>
        </div>
    )
}

export default HookUse;