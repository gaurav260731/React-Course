import { NavLink } from "react-router";

const PageRouting = () => {
    return(
        <>
        <div >
            <ul style={{display: "flex", flexDirection: "row", justifyContent: "space-around", listStyleType: "none", marginRight: "0px", padding: "0px"}}>
                <li><NavLink to="/login" style={({isActive})=> ({
                    color: isActive ? "red" : "black"
                })}>Login</NavLink></li>
                <li><NavLink to="/" style={({isActive})=> ({
                    color: isActive ? "red" : "black"
                })}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive})=> ({
                    color: isActive ? "red" : "black"
                })}>About</NavLink></li>
                <li><NavLink to="/contact" style={({isActive})=> ({
                    color: isActive ? "red" : "black"
                })}>Contact</NavLink></li>
            </ul>
        </div>
        </>
    )
}

export default PageRouting;