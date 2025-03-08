
import { useState } from 'react';
import { useLogAuth } from './LoginContext';
import { useNavigate } from 'react-router';


const Login = () => {
    const {isLogin, setIsLogin} = useLogAuth();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const handleLoginLogout = () => {
        setIsLogin(!isLogin);
        navigate(`/home/${email}`);
    }
    return(
        <>
            <h1>Login</h1>
           {
            !isLogin ?
            <input type="text" placeholder="Enter email" onChange={(event)=> setEmail(event.target.value)}/> :
            <h3>User is Logged in</h3>
           }
          
           <button onClick={handleLoginLogout}>{isLogin ? "Logout" : "Login"}</button> 
        </>
    )
}

export default Login;