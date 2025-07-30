import Kixify from "../../assets/images/Kixify.png"
import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
// import allData from "../data";
// console.log(allData)
// console.log(allData.category)

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logop">
                <img src={Kixify} />
            </div>
            <div className="delivery">
                <ul className="sub">
                    <li className="sub_li">
                        <Link to={"/"}>HOME</Link>
                        </li>
                    <li className="dropdown sub_li">
                         <Link >MEN</Link>
                        <ul className="dropdownmenu">
                            <li><Link to={"/sneakers"}>Sneakers</Link></li>
                            <li><Link to={"/running"}>Running Shoes</Link></li>
                            <li><Link to={"/casual"}>Casual Shoes</Link></li>
                            <li><Link to={"/boot"}>Boots</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown sub_li">
                        WOMEN
                        <ul className="dropdownmenu">
                            <li><Link to={"/heel"}>Heels</Link></li>
                            <li><Link to={"/boots"}>Boots</Link></li>
                            <li><Link to={"/wrunning"}>Running Shoes</Link></li>
                            <li><Link to={"/flats"}>Flats</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown sub_li">
                        KIDS
                        <ul className="dropdownmenu ">
                            <li>First Walkers</li>
                            <li>Dress Shoes</li>
                            <li>Sandals</li>
                            <li>Slides</li>
                        </ul>
                        </li>
                    <Link to={"/contact"}><li className="sub_li">CONTACT</li></Link>
                </ul>
            </div>
            <div className="icons">
                <span className="navicon"><FaShoppingCart/></span>
                <span className="navicon"><FaHeart/></span>
                <span className="navicon"><CgProfile /></span>
            </div>
        </div>
    )
}
export default Navbar;