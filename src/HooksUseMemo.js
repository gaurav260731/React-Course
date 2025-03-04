import { useState, useMemo } from "react";
import HighOrder from "./HighOrder";
import Authentication from "./Authentication";

function HooksUseMemo() {
    const [name, setName] = useState('Ajay');
    const [city, setCity] = useState('Delhi');

    const delayCity = () => {
        for(let i=0; i<100000000; i++) {

        }

        return city;
    }

    let getCityName = useMemo(delayCity, [city]);

    return(
        <>
        <div style={{justifyContent:"center", marginLeft:"200px"}}>
            <h3>Use of useMemo</h3>
            <p>{name}</p>
            <input type="text" value={name} placeholder="Enter name" onChange={(event)=> setName(event.target.value)} /><br/><br/>

            <h3>{getCityName}</h3>
            <input type ="text" value={city} placeholder="Enter city" onChange={(event)=> setCity(event.target.value)} />
        </div>
        </>
    )

}
const HighOrderComp = Authentication(HighOrder(HooksUseMemo));
export default HighOrderComp;