import "./Signinbanner.css"

const Signinbanner = () =>{
    return(
        <div className="Signstrip">
            <div className="content">
            <h2 className="Recommendations">See personalized Recommendations</h2>
            <button className="Tosign">Sign in</button>
            <p className="New">New Customer? <a href="Sign in here">Sign in here</a> </p>
            </div>
        </div>
    )
}
export default Signinbanner;