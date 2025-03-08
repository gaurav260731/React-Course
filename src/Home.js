import { useNavigate, useParams } from "react-router";
const Home = () => {
    let navigate = useNavigate();
    const {email} = useParams();
    console.log(email);
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
            <p>User is logged as <b>{email}</b></p>
            <p>This is Home page</p>
            <button onClick={handleNavigate}>Contact</button>
        </div>
    )
}
export default Home;