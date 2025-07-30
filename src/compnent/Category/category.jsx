import "./Category.css";
import { Link, useParams } from "react-router-dom";
import Menblock from "../../assets/images/Menblock.jpg"
import Womenblock from "../../assets/images/Womenblock.jpg"
import Kidsblock from "../../assets/images/Kidsblock.jpg"


const Category = () => {

    const categorysData = [
  {
    category: "Men",
    image: Menblock,
    path: "men"
  },
  {
    category: "Women",
    image: Womenblock,
    path: "women"
  },
  {
    category: "Kids",
    image: Kidsblock,
    path: "kids"
  }
];
   
    
  return (
    <div className="category-container">
      {categorysData.map((cat, index) => (
        <Link to={`/allItem/${cat.path}`} key={index} className="category-link">
          <div className="category-card">
            <img src={cat.image} alt={cat.category} className="category-image" />
            <h2 >{cat.category}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
