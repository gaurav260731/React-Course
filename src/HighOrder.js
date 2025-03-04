
function HighOrder(Component) {
    return function (props) {
        return (
            <>
                <div style={{justifyContent:"center", backgroundColor: "green", height: "400vh"}}>
                    <Component {...props}/>
                </div>
            </>
        )
    }
    
}
export default HighOrder;