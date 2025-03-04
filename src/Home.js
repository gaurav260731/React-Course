import { useNavigate } from "react-router";
const Home = () => {
    let navigate = useNavigate();
    const handleNavigate = () => {
        fetch("http://localhost:8080/")
        .then(result=> result.json())
        .then((data) => {if(data) {
            navigate('/about');
        }})
        .catch((error)=> {
            navigate('/contact');
        })
       // navigate("/contact");
    }
    return (
        <div style={{textAlign:"center"}}>
            <p>This is Home page</p>
            <button onClick={handleNavigate}>Contact</button>
        </div>
    )
}
export default Home;