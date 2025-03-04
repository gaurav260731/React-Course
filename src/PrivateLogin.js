import { Navigate } from "react-router";
import { useLogAuth } from "./LoginContext";


//Act as protected route
const PrivateLogin = ({children}) => {
   const {isLogin} = useLogAuth();
    return (
       isLogin ?
       children:
       <Navigate to="/login" />
       
    )
}

export default PrivateLogin;