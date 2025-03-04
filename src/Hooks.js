import { useState } from "react";
function Hooks() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('Ajay');

    const incrementMethod = () => {
        setCount(count+1);
    }

    const handleNameChange = (event) => {                       
        setName(event.target.value);
    }

    return (<>
        <p>Count value {count}</p>
        <p>{name}</p>
        <input type="text" value={name} placeholder="Enter name" onChange={handleNameChange} /><br/><br/>
        <button onClick={incrementMethod}>Counter</button>
    </>)
}

export default Hooks;
