import "./Men.css"
import Nikecasual from "../../assets/images/Nikecasual.webp"
import Adidascasual1 from "../../assets/images/Adidascasual1.jpg"
import Pumacasual from "../../assets/images/Pumacasual.jpeg"
import Reebokcasual from "../../assets/images/Reebokcasual.jpg"
import Woodlandcasual from "../../assets/images/Woodlandcasual.jpg"
import Batacasual from "../../assets/images/Batacasual.jpg"
import Skecherscasual from "../../assets/images/Skecherscasual.jpg"
import Redtapecasual from "../../assets/images/Redtapecasual.jpg"

const products = [
  {
    id: 1,
    brand: 'Nike',
    subcategory: 'M',
    price: 3499,
    mrp: 4999,
    image: Nikecasual,
  },
  {
    id: 2,
    brand: 'Adidas',
    subcategory: 'M',
    price: 2999,
    mrp: 4299,
    image: Adidascasual1,
  },
  {
    id: 3,
    brand: 'Puma',
    subcategory: 'M',
    price: 2799,
    mrp: 3999,
    image: Pumacasual,
  },
  {
    id: 4,
    brand: 'Reebok',
    subcategory: 'M',
    price: 3199,
    mrp: 4499,
    image: Reebokcasual,
  },
  {
    id: 5,
    brand: 'Woodland',
    subcategory: 'M',
    price: 3899,
    mrp: 5199,
    image: Woodlandcasual,
  },
  {
    id: 6,
    brand: 'Bata',
    subcategory: 'M',
    price: 2199,
    mrp: 2999,
    image: Batacasual,
  },
  {
    id: 7,
    brand: 'Skechers',
    subcategory: 'M',
    price: 4099,
    mrp: 5599,
    image: Skecherscasual,
  },
  {
    id: 8,
    brand: 'Red Tape',
    subcategory: 'M',
    price: 2699,
    mrp: 3599,
    image: Redtapecasual,
  },
];

const Men = () => {
  return (
    <div className="men-container">
      {products.map((product) => (
        <div className="men-card" key={product.id}>
          <img src={product.image} alt={product.brand} className="men-image" />
          <div className="product-info">
            <h3>{product.brand}</h3>
            <p>Subcategory: {product.subcategory}</p>
            <p>Price: ₹{product.price}</p>
            <p className="mrp">MRP: ₹{product.mrp}</p>
          </div>
          <div className="button-row">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Men;