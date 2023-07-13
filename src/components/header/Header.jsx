import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/Vector.png";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [showMobMenu, setShowMobMenu] = useState(false);
  return (
    <>
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
          <div className="bars" onClick={() => setShowMobMenu(!showMobMenu)}>
            <span>
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className={`mob-menu ${showMobMenu ? "" : "hidden"}`}>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Products</li>
          <li>About us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
