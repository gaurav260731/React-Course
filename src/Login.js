import { useLogAuth } from './LoginContext';


const Login = () => {
    const {isLogin, setIsLogin} = useLogAuth();
    const handleLoginLogout = () => {
        setIsLogin(!isLogin);
    }
    return(
        <>
            <h1>Login</h1>
           {
            !isLogin ?
            <input type="text" placeholder="Enter email" /> :
            <h3>User is Logged in</h3>
           }
          
           <button onClick={handleLoginLogout}>{isLogin ? "Logout" : "Login"}</button> 
        </>
    )
}

export default Login;