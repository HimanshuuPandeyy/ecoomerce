import Brands from "../../compnent/Brands/Brands";
import Cards from "../../compnent/Cards/Cards";
import Herosection from "../../compnent/Herosection/Herosection";
import Signinbanner from "../../compnent/Signinbanner/Signinbanner";
import Sale from "../../compnent/Sale/Sale";
import Productsection from "../../compnent/Productsection/Productsection";
import Products from "../../compnent/Products/Products";
import Category from "../../compnent/Category/category";

const Home = () => {
  return (
    <div>
      <Sale/>
      <Herosection />
      <Category/>
      <Cards />
      <Brands/>
      <Productsection/>
      <Products/>
      <Signinbanner/>
    </div>
  );
};

export default Home;