import React from "react";
import "./Main.scss";
import { AiOutlineRight } from "react-icons/ai";
import Logo from "../../assets/Vector.png";
import img1 from "../../assets/products/image1.png";
import img2 from "../../assets/products/image2.png";
import img3 from "../../assets/products/image3.png";
import img4 from "../../assets/products/image4.png";
import img5 from "../../assets/products/image5.png";
import img6 from "../../assets/products/image6.png";
import img7 from "../../assets/products/image7.png";
import img8 from "../../assets/products/image8.png";
import img9 from "../../assets/products/image9.png";
import loc from "../../assets/Rectangle-location.png";

const data = [
  {
    id: 1,
    name: "Fruits and Vegetables",
    image: Logo,
  },
  {
    id: 2,
    name: "Meats & Seafood",
    image: "",
  },
  {
    id: 3,
    name: "Breakfast & Dairy",
    image: "",
  },
  {
    id: 4,
    name: "Beverages",
    image: "",
  },
  {
    id: 5,
    name: "Breads & Bakery",
    image: "",
  },
  {
    id: 6,
    name: "Frozen Fruits",
    image: "",
  },
  {
    id: 7,
    name: "Buiscuits & Snacks",
    image: "",
  },
  {
    id: 8,
    name: "Grocery & Staples",
    image: "",
  },
];

const productsData = [
  {
    id: 1,
    category: "Beverages",
    name: "Nescafe Coffee",
    price: 3.99,
    discountPrice: 4.5,
    img: img1,
  },
  {
    id: 2,
    category: "Meat & Seafood",
    name: "Giffy Concentrated Dishwash Gel",
    price: 3.99,
    discountPrice: 11.35,
    img: img2,
  },
  {
    id: 3,
    category: "Fruits & Vegetables",
    name: "Everredy LED Bult - 9 watt",
    price: 3.99,
    discountPrice: 18.21,
    img: img3,
  },
  {
    id: 4,
    category: "Grocery & Staples",
    name: "Blue Diamond Almonds Lightly",
    price: 3.99,
    discountPrice: 49.99,
    img: img4,
  },
  {
    id: 5,
    category: "Breakfast & Dairy",
    name: "Nestle Original Coffee",
    price: 3.99,
    discountPrice: 11.35,
    img: img5,
  },
  {
    id: 6,
    category: "Grocery & Staples",
    name: "Brown Rice",
    price: 3.99,
    discountPrice: 49.99,
    img: img6,
  },
  {
    id: 7,
    category: "Grocery & Staples",
    name: "Nivea Milk Delights Face Wash",
    price: 3.99,
    discountPrice: 4.5,
    img: img7,
  },
  {
    id: 8,
    category: "Fruits & Vegetables",
    name: "TM Rice",
    price: 3.99,
    discountPrice: 49.99,
    img: img8,
  },
  {
    id: 9,
    category: "Grocery & Staples",
    name: "Garnier Men Acno Face Wash",
    price: 3.99,
    discountPrice: 49.99,
    img: img9,
  },
];

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="categories">
          <div className="title">
            <h2>Top Categories</h2>
          </div>
          <div className="categories-container">
            {data.map((data) => (
              <div key={data.id} className="category">
                <img src={data.image} alt="" />
                <p>{data.name}</p>
                <AiOutlineRight />
              </div>
            ))}
          </div>
        </div>
        <div className="products-listing">
          {productsData.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt="" />
              <p>{product.category}</p>
              <h3>{product.name}</h3>
              <p className="pricing">
                <span className="disc-price">${product.discountPrice}</span> $
                {product.price}
              </p>
              <button className="btn">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
