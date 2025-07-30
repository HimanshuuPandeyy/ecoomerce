
import "./Brands.css"
import Adidas from "../../assets/images/Adidas.png"
import Fila  from "../../assets/images/Fila.webp"
import Newbalance from "../../assets/images/Newbalance.png"
import Nike  from "../../assets/images/Nike.png"
import Puma  from "../../assets/images/Puma.png"
import Vans from "../../assets/images/Vans.jpg"
import Reebok  from "../../assets/images/Reebok.webp"

const Brands = () => {
    return(
        <div className="slides">
            <div className="brandcontent">
                <h1>The brands you know & love</h1>
            </div>
            <div className="imgslides">
                <div className="nike"><img src={Adidas}/></div>
                <div className="nike"><img src={Fila}/></div>
                <div className="nike"><img src={Newbalance}/></div>
                <div className="nike"><img src={Nike}/></div>
                <div className="nike"><img src={Puma}/></div>
                <div className="nike"><img src={Vans}/></div>
                <div className="nike"><img src={Reebok}/></div>
            </div>
        </div>
    )
}
export default Brands;