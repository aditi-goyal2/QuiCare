const Login=({isLogged,setIsLogged})=>{
    function handleClick(){
        setIsLogged(!isLogged)
    }
    return (
        <div className="unique">
           
            <h2>If not logged in as Retailer then no access to G-QrCode</h2>
            {(isLogged?
            <button onClick={handleClick}>Logout as Retailer</button>
            :
            <button onClick={handleClick}>Login As Retailer</button>)
            }
        </div>
    )
}
export default Login