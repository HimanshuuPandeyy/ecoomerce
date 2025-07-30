import "./Productsection.css"
import Nbmen from "../../assets/images/Nbmen.webp"
import Heels  from "../../assets/images/Heels.webp"
import Kidsshoe  from "../../assets/images/Kidsshoe.webp"
import Adidasmen  from "../../assets/images/Adidasmen.webp"

const data = [
    {
        image: Nbmen ,
        title: " New Balance 574 Core",
        description: "Limited Edition",
        category: "New Balnce",
        price: "₹6,499",
        rating: "⭐ 4.6 (1,023 reviews)",
    },
    {
        image: Heels,
        title: "Bella Women’s Block Heel Sandals",
        description: "Limited Edition",
        category: "Casual Heels",
        price: "₹1,799",
        rating: "⭐ 4.3 (512 reviews)",
    },
    {
        image: Kidsshoe ,
        title: "TinySteps Velcro Everyday Sneakers",
        description: "New Arrival",
        category: "Casual Kids Shoes",
        price: " ₹999",
        rating: "⭐ 4.5 (642 reviews)",
    },
    {
        image: Adidasmen,
        title: "Adidas Ultraboost Light",
        description: "New Arrival",
        category: "Adidas",
        price: " ₹13,999",
        rating: "⭐ 4.8 (1,245 reviews)",
        
    }
]

const Productsection = () => {
    return (
        <div className="Productcard">
            {data.map((items) => (
                <div className="Productdetails">
                    <img src={items.image} />
                    <div className="Nikedetails">
                        <h1 className="Nike">{items.category}</h1>
                        <p className="Limited">{items.description}</p>
                        <p className="Nikeair">{items.title}</p>
                        <h3 className="Price">{items.price} <s className="cs">M.R.P.:₹10,999</s>  <span className="Css" >(14% OFF)</span></h3>
                        <p className="Rating">{items.rating}</p>
                        <button className="Add">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Productsection;