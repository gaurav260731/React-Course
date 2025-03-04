import { useActionState } from "react";

function Form() {
    const handleSubmit = async (prevState, queryData) => {
        const name = queryData.get("name");
        const email = queryData.get("email");
        const password = queryData.get("password");
        console.log(name, email, password);
        await new Promise(resolve => {
            setTimeout(resolve, 2000);
          });
        return {
            name, email, password
        }
           
        
    }

    const [user, submitForm, pending] = useActionState(handleSubmit, {
        name: null,
        email: null,
        password: null
    });
  
    return(
        <div style={{marginTop: "10px", display: "flex", justifyContent: "center"}}>
            
            <div>
            <h2>React 19 Form submission using useActionState</h2>
            <form action={submitForm}>
                <div style={{marginTop: "10px"}}>
                    <input name="name" type="text" placeholder="Name" />
                </div>
                <div style={{marginTop: "10px"}}>
                    <input name="email" type="email" placeholder="Email" />
                </div>
                <div style={{marginTop: "10px"}}>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <div style={{marginTop: "10px", marginBottom: "10px"}}>
                    <button type="submit">Submit</button>
                </div>
                
                {pending ? <p>Loading...</p>: <p>Loaded</p>}

                <div>
                    <h2>User Details</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>
                

            </form>
            </div>
            
        </div>
    )
}

export default Form;