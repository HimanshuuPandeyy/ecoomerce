import "./Products.css"
import Mennikee from "../../assets/images/Mennikee.webp"
import Nike  from "../../assets/images/Nike.webp"
import Nikemen  from "../../assets/images/Nikemen.webp"
import Pumamen  from "../../assets/images/Pumamen.webp"

const data = [
    {
        image:Mennikee,
        title:"Nike Air Max 270",
        description:"Limited Edition",
        category:"Nike",
        price:"5000",
        rating:"⭐ 4.8 (864 reviews)",
    },
    {
        image:Nike ,
        title:"Nike Air Max 270",
        description:"Limited Edition",
        category:"Nike",
        price:"6999",
        rating:"⭐ 4.6 (1,039 reviews)",
    },
    {
        image:Nikemen,
        title:"Nike Air Max 270",
        description:"New Arrival",
        category:"Nike",
        price:"10999",
        rating:"⭐ 4.2 (1,234 reviews)",
    },
    {
        image:Pumamen ,
        title:"Nike Air Max 270",
        description:"New Arrival",
        category:"Puma",
        price:"8999",
        rating:"⭐ 4.5 (760 reviews)",
    }
]


const Products = () => {
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
export default Products;