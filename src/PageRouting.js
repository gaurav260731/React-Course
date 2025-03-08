import { NavLink } from "react-router";

const PageRouting = () => {
    return(
        <>
        <div >
            <ul className="nav" style={{display: "flex", flexDirection: "row", 
            justifyContent: "space-around", listStyleType: "none", 
            marginRight: "0px", padding: "0px", 
            backgroundColor: "#4c4c4c", color: "#fff", height: "50px", alignItems: "center"}}>
                <li><NavLink to="/login" style={({isActive})=> ({
                    color: isActive ? "red" : "white"
                })}>Login</NavLink></li>
                <li><NavLink to="/home/:email" style={({isActive})=> ({
                    color: isActive ? "red" : "white"
                })}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive})=> ({
                    color: isActive ? "red" : "white"
                })}>About</NavLink></li>
                <li><NavLink to="/contact" style={({isActive})=> ({
                    color: isActive ? "red" : "white"
                })}>Contact</NavLink></li>
            </ul>
        </div>
        </>
    )
}

export default PageRouting;