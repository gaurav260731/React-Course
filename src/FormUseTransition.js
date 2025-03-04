import { useState, useTransition } from "react";

function FormUseTransition() {
    const {name, setName} = useState();
    const {email, setEmail} = useState();
    const {error, setError} = useState();
    const [isPending, setTransition] = useTransition();

    const handleSubmit=(queryData)=> {
        setTransition(()=> {
            setName(queryData.get('name'));
            setEmail(queryData.get('email'));
        })
    }

    return (
        <>
            <form action={handleSubmit}>
                <input type="text" name="name" value={name} />
                <input type="text" name="email" value={email} />
                
                <button type="submit" disable={isPending}>Submit</button>
                {error & <p>{error}</p>}
            </form>
        </>
    )


}
export default FormUseTransition;