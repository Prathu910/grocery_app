import React from "react";
import "./Header.scss";
import Logo from "../../assets/Vector.png";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-content container">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Logo</h1>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Products</li>
        <li>About us</li>
      </ul>
      <div className="right-section">
        <div className="search-box">
          <BsSearch />
          <input type="text" />
        </div>
        <div className="cart">
          <button onClick={() => navigate("/cart")}>
            <span>{<GrCart />}</span>My Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
