const authenticated = true;
function Authentication(Component) {
    return function (props) {
        if(authenticated) {
            return (
                <>
                    <Component {...props} />
                </>
            )
        }else {
            return (
                <>
                    <h3>User is not authenticated.</h3>
                </>
            )
        }
        
    }
}

export default Authentication;