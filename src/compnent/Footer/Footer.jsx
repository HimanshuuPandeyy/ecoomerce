import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (

        <footer className="footer"> 
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo">Delio</h2>
                    <p>Your one-stop shop for Nike, Adidas, Puma & more. Step into style!</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">New Arrivals</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <span className="Socialicon"><FaFacebook /></span>
                        <span className="Socialicon"><FaInstagramSquare /></span>
                        <span className="Socialicon"><FaSquareXTwitter /></span>
                        <span className="Socialicon"><IoLogoYoutube /></span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 DELIO. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;