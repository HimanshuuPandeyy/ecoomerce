import "./Cards.css"
import Menscard  from "../../assets/images/Menscard.jpg"
import Womenscard  from "../../assets/images/Womenscard.jpg"
import Kidscard  from "../../assets/images/Kidscard.jpg"

const Cards = () => {
    return (
        <div className="Cardcontainer">
            <div className="card1">
                <img src={Menscard}/>
                <div className="imgtext">
                    <h2 className="line">Men's Sneakers</h2>
                    <h2 className="line">40-70% OFF</h2>
                    <button className="line2">Shop Now</button>
                </div>
                
            </div>
            <div className="card1">
                <img src={Womenscard}/>
                <div className="imgtext">
                    <h2 className="line">Sandal-Mania</h2>
                    <h2 className="line">30-50% OFF</h2>
                    <button className="line2">Shop Now</button>
                </div>
                
            </div>
            <div className="card1">
                <img src={Kidscard}/>
                <div className="imgtext">
                    <h2 className="line">For Kids</h2>
                    <h2 className="line">50-70% OFF</h2>
                    <button className="line2">Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Cards;