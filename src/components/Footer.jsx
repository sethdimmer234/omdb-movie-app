import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image (3).png"

function Footer() {
  return (
    <footer>
        <div className="footer__container">
            {/* <div className="row"> */}
                    <figure className="footer__logo">
                        <Link to="/">
                        <img src={logo} className="footer__logo--img" alt=""/>
                        </Link>
                    </figure>
                <div className="footer__list">
                    <ul className="footer__menu">
                    <Link to="/" className="footer__link link__hover-effect">
                        Home
                    </Link>
                    <Link to="/Movies" className="footer__link link__hover-effect">
                        Find Your Movie
                    </Link>
                    </ul>
                </div>
                <div className="footer__copyright">Copyright &copy; 2023 MoviFlix</div>
            </div>
        {/* </div> */}
    </footer>
  );
}

export default Footer;