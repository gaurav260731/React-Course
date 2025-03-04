
import {useState, createContext, useContext} from "react";

const LogAuth = createContext()
const LoginContext = ({children}) => {
   const [isLogin, setIsLogin] = useState(false);
   return(
      <LogAuth.Provider value={{isLogin, setIsLogin}}>
         {children}
      </LogAuth.Provider>
   )
}
const useLogAuth = () => useContext(LogAuth);
export {useLogAuth,LoginContext};